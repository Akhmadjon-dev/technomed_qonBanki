const bcrypt = require("bcrypt");
const Users = require("../models/users");
const util = require("../utils");

const baseUrl = process.env.REACT_APP_baseUrl || "";

exports.fetchAllUsers = (req, res) => {
  Users.find()
    .then((Users) => res.json(Users))
    .catch((err) => res.send(err));
};

exports.fetchUserById = (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((User) => {
      res.json(User);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllUsers = (req, res) => {
  Users.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createUser = async (req, res) => {
  const { webCam, name, createdAt, password, email, file } = req.body;
  // let imgFile = null;

  // if (webCam) {
  //   imgFile = await util.webImgtoFile(webCam, 'Users', `${name}-${createdAt}`);
  // }

  // const img = file ? baseUrl + file.path.replace('public', '') : (imgFile || webCam);
  const hashedPassword = await bcrypt.hash(password, 8);
  const User = new Users({
    ...req.body,
    password: hashedPassword,
  });

  User.save()
    .then((User) => {
      res.json(User);
      // util.resizeImg(file, 'Users');
    })
    .catch((err) => {
      const msg =
        err.code === 11000
          ? `Users with "${email}" email adress exists`
          : err.errmsg;
      res.json({ success: false, msg });
    });
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { webCam, oldImg, updatedAt, name } = req.body;

  // let imgFile = null;

  // if (webCam) {
  //   imgFile = await util.webImgtoFile(webCam, 'Users', `${name}-${updatedAt}`, true, oldImg);
  // }

  // const img = req.file ? baseUrl + req.file.path.replace('public', '') : (imgFile || webCam || oldImg);

  const updatedData = { ...req.body };

  Users.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((User) => {
      res.json(User);
      util.resizeImg(req.file, "Users");
    })
    .catch((err) => res.send(err));
};

exports.changeUserAuth = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  console.log(req.body);

  const hash = await bcrypt.hash(password, 8);
  Users.find({ email })
    .then((User) => {
      console.log(User);

      if ((User.length && User[0]._id == id) || !User.length) {
        console.log("Success");

        Users.findByIdAndUpdate(
          id,
          { $set: { email, password: hash } },
          { new: true }
        )
          .then(() => res.json({ success: true }))
          .catch((err) => res.json({ success: false, msg: err.message }));
      } else if (User.length && User[0]._id != id) {
        res.json({
          success: false,
          msg: `You can't use the email. Another user has been registered with '${email}'`,
        });
      }
    })
    .catch((err) => res.json({ success: false, msg: err.message }));
};

exports.deleteUserById = (req, res) => {
  const { id } = req.params;
  Users.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
