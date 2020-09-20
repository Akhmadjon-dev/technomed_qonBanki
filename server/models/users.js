const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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
    default: "user",
    type: String,
  },
});

userSchema.index({ email: 1 });
const User = mongoose.model("User", userSchema);

module.exports = User;
