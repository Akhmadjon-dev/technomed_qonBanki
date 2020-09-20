const Bloods = require("../models/bloods");
const util = require("../utils");

const baseUrl = process.env.REACT_APP_baseUrl || "";

exports.fetchAllBloods = (req, res) => {
  Bloods.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
};

exports.fetchBloodsById = (req, res) => {
  const { id } = req.params;

  Bloods.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllBloods = (req, res) => {
  Bloods.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createNewBloods = async (req, res) => {
  const { createdAt } = req.body;
  Bloods.create({ ...req.body })
    .then((data) => {
      res.json({ success: true, payload: data, msg: "course_created" });
    })
    .catch((err) => {
      res.json({ success: false, msg: err.message });
    });
};

exports.updateBloodsById = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body };

  Bloods.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((data) => {
      res.json({
        success: true,
        payload: data,
        msg: "Blood_updated",
      });
    })
    .catch((err) => res.send(err));
};

exports.deleteBloodsById = (req, res) => {
  const { id } = req.params;
  Bloods.findByIdAndRemove(id)
    .then((deletedBlood) => {
      Bloods.find()
        .sort({ createdAt: -1 })
        .then((data) => {
          res.json({ success: true, msg: "Blood_deleted", payload: data });
        })
        .catch((err) => res.json({ success: false, msg: err.message }));
      res.json({ success: true, msg: "The Blood has been deleted" });
    })
    .catch((err) => res.send(err));
};
