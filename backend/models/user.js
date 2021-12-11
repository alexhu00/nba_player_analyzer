const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  groups: [[{ type: Number, required: true }]]
});

module.exports = mongoose.model("User", signUpTemplate);
