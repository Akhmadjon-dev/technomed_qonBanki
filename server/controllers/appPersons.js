const bcrypt = require("bcrypt");
const AppPersons = require("../models/appPersons");
const util = require("../utils");

const baseUrl = process.env.REACT_APP_baseUrl || "";

exports.fetchAllAppPersons = (req, res) => {
  AppPersons.find()
    .then((AppPersons) => res.json(AppPersons))
    .catch((err) => res.send(err));
};

exports.fetchAppPersonById = (req, res) => {
  const { id } = req.params;

  AppPersons.findById(id)
    .then((AppPerson) => {
      res.json(AppPerson);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllAppPersons = (req, res) => {
  AppPersons.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createAppPerson = async (req, res) => {
  const AppPerson = new AppPersons({
    ...req.body,
  });

  AppPerson.save()
    .then((AppPerson) => {
      res.json(AppPerson);
      util.resizeImg(file, "AppPersons");
    })
    .catch((err) => {
      res.json({ success: false });
    });
};

exports.updateAppPersonById = async (req, res) => {
  const { id } = req.params;

  const updatedData = { ...req.body };

  AppPersons.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((AppPerson) => {
      res.json(AppPerson);
    })
    .catch((err) => res.send(err));
};

exports.deleteAppPersonById = (req, res) => {
  const { id } = req.params;
  AppPersons.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
