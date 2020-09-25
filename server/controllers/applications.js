const Applications = require("../models/applications");

const baseUrl = process.env.REACT_APP_baseUrl || "";

exports.fetchAllApplications = (req, res) => {
  Applications.find()
    .populate("appPersons")
    .then((applications) => res.json(applications))
    .catch((err) => res.send(err));
};

exports.fetchApplicationById = (req, res) => {
  const { id } = req.params;

  Applications.findById(id)
    .then((application) => {
      res.json(application);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllApplications = (req, res) => {
  Applications.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createApplication = async (req, res) => {
  const Application = new Applications({
    ...req.body,
  });

  Application.save()
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.json({ success: false });
    });
};

exports.updateApplicationById = async (req, res) => {
  const { id } = req.params;

  const updatedData = { ...req.body };

  Applications.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((application) => {
      res.json(application);
    })
    .catch((err) => res.send(err));
};

exports.deleteApplicationById = (req, res) => {
  const { id } = req.params;
  Applications.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
