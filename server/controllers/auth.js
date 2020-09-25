const bcrypt = require("bcrypt");
const Users = require("../models/users");
const Admins = require("../models/admins");

exports.signIn = async (req, res) => {
  const { email, password, type } = req.body;

  if (type === "user") {
    try {
      const admin = await Users.findOne({ email });
      if (admin) {
        const { password: hash, _id, name } = admin;
        const isPasswordCorreect = await bcrypt.compare(password, hash);

        if (isPasswordCorreect) {
          req.session.userId = _id;
          req.session.userType = type;
          req.session.userName = name;
          req.session.userEmail = email;
          req.session.loggedIn = true;
          res.json({ payload: admin, success: true });
        } else {
          res.json({ msg: "Username or password is wrong", success: false });
        }
      } else {
        res.json({
          msg: `No user exist with user name ${email}`,
          success: false,
        });
      }
    } catch (err) {
      res.json({ msg: err.message, success: false });
    }
  } else {
    try {
      const seller = await Admins.findOne({ email });
      if (seller) {
        const { password: hash, _id, name } = seller;
        const isPasswordCorreect = await bcrypt.compare(password, hash);

        if (isPasswordCorreect) {
          req.session.userId = _id;
          req.session.userType = type;
          req.session.userName = name;
          req.session.userEmail = email;
          req.session.loggedIn = true;
          res.json({ payload: seller, success: true });
        } else {
          res.json({ msg: "Username or password is wrong", success: false });
        }
      } else {
        res.json({
          msg: `No user exist with user name ${email}`,
          success: false,
        });
      }
    } catch (err) {
      res.json({ msg: err.message, success: false });
    }
  }
};

exports.signUp = async (req, res) => {
  const { password, type, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  console.log("working", hashedPassword);

  if (type === "user") {
    try {
      const admin = await Users.create({
        ...req.body,
        password: hashedPassword,
      });
      req.session.userId = admin._id;
      req.session.userType = admin.type;
      req.session.userName = admin.name;
      req.session.userEmail = admin.email;
      req.session.loggedIn = true;
      res.json({ payload: admin, success: true });
    } catch (err) {
      const msg =
        err.code === 11000
          ? `Users with "${email}" email adress is exist`
          : err.message;
      res.json({ success: false, msg });
    }
  } else {
    try {
      const seller = await Admins.create({
        ...req.body,
        password: hashedPassword,
      });
      req.session.userId = seller._id;
      req.session.userType = seller.type;
      req.session.userName = seller.name;
      req.session.userEmail = seller.email;
      req.session.loggedIn = true;
      res.json({ payload: seller, success: true });
    } catch (err) {
      const msg =
        err.code === 11000
          ? `Users with "${email}" email adress is exist`
          : err.message;
      res.json({ success: false, msg });
    }
  }
};

exports.signOut = (req, res) => {
  req.session.userId = null;
  req.session.userType = null;
  req.session.userName = null;
  req.session.email = null;
  req.session.loggedIn = false;
  req.session.destroy();

  res.json({ msg: "Sign out has been successfull" });
};
