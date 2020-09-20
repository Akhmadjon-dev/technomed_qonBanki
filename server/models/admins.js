const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminsSchema = new Schema({
  address: String,
  email: {
    required: true,
    type: String,
    unique: true,
  },
  name: String,
  password: {
    required: true,
    type: String,
  },
  phone: String,
  type: {
    default: "admin",
    type: String,
  },
});

adminsSchema.index({ email: 1 });
const Admins = mongoose.model("Admin", adminsSchema);

module.exports = Admins;
