const mongoose = require("mongoose");
const { Schema } = mongoose;

const appPersonsSchema = new Schema({
  name: String,
  history: Number,
  diagnos: String,
  donorBloodGroup: String,
  resusFaktor: String,
  erMassa: Number,
  szp: Number,
  yubQon: Number,
  qonTarkibi: String,
  trom: Number,
  alb10: Number,
  alb20: Number,
  krio: Number,
  cc: Number,
  ac: Number,
  createdAt: {
    default: Date.now(),
    type: Number,
  },
  updatedAt: {
    default: Date.now(),
    type: Number,
  },
});

appPersonsSchema.index({ name: 1 });
const AppPerson = mongoose.model("AppPerson", appPersonsSchema);

module.exports = AppPerson;
