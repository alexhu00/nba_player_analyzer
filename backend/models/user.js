const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  groups: [{ type: Object, required: false }]
});

module.exports = mongoose.model("User", signUpTemplate);
