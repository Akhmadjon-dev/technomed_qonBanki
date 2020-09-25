const mongoose = require("mongoose");
const { Schema } = mongoose;

const bloodsSchema = new Schema({
  dateCome: Number,
  gemakone: String,
  donorName: String,
  donorBloodGroup: String,
  resusFaktor: String,
  erMassa: Number,
  szp: Number,
  oblErM: Number,
  otmEr: Number,
  azmEr: Number,
  tk: Number,
  alb10: Number,
  alb20: Number,
  krio: Number,
  cc: Number,
  ac: Number,
  dateTake: Number,
  where: String,
  dateGo: Number,
  lpu: String,
  sickName: String,
  sickDiagnos: String,
  sickGroupResus: String,
  sickDateBorn: Number,
  sickHistory: Number,
  putBlood: Number,
  putBloodDate: Number,
  vrach: String,
  createdAt: {
    default: Date.now(),
    type: Number,
  },
  note: String,
  updatedAt: {
    default: Date.now(),
    type: Number,
  },
});

// bloodsSchema.index({ name: 1 });
const Bloods = mongoose.model("Blood", bloodsSchema);

module.exports = Bloods;
