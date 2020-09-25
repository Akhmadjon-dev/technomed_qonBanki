const bcrypt = require("bcrypt");
const Admins = require("../models/admins");

const baseUrl = process.env.REACT_APP_baseUrl || "";

exports.fetchAllAdmins = (req, res) => {
  Admins.find()
    .then((admins) => res.json(admins))
    .catch((err) => res.send(err));
};

exports.fetchAdminById = (req, res) => {
  const { id } = req.params;

  Admins.findById(id)
    .then((Admin) => {
      res.json(Admin);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllAdmins = (req, res) => {
  Admins.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createAdmin = async (req, res) => {
  const { name, createdAt, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const Admin = new Admins({
    ...req.body,
    password: hashedPassword,
  });

  Admin.save()
    .then((Admin) => {
      res.json(Admin);
    })
    .catch((err) => {
      const msg =
        err.code === 11000
          ? `Users with "${email}" email adress exists`
          : err.errmsg;
      res.json({ success: false, msg });
    });
};

exports.updateAdminById = async (req, res) => {
  const { id } = req.params;

  const updatedData = { ...req.body };

  Admins.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((Admin) => {
      res.json(Admin);
    })
    .catch((err) => res.send(err));
};

exports.changeAdminAuth = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 8);
  Admins.find({ email })
    .then((Admin) => {
      if ((Admin.length && Admin[0]._id == id) || !Admin.length) {
        Admins.findByIdAndUpdate(
          id,
          { $set: { email, password: hash } },
          { new: true }
        )
          .then(() => res.json({ success: true }))
          .catch((err) => res.json({ success: false, msg: err.message }));
      } else if (Admin.length && Admin[0]._id != id) {
        res.json({
          success: false,
          msg: `You can't use the email. Another user has been registered with '${email}'`,
        });
      }
    })
    .catch((err) => res.json({ success: false, msg: err.message }));
};

exports.deleteAdminById = (req, res) => {
  const { id } = req.params;
  Admins.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
