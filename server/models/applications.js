const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
  appPersons: [{ type: Schema.Types.ObjectId, ref: "AppPerson" }],
  vrach: { type: String, required: true },
  leaderSection: { type: String, required: true },
  status: { type: String, default: "progress" },
  id: { type: String, required: true },
  createdAt: {
    default: Date.now(),
    type: Number,
  },
  updatedAt: {
    default: Date.now(),
    type: Number,
  },
});

applicationSchema.index({ id: 1 });
const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
