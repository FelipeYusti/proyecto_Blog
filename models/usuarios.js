// MODELO USUARIO
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    pais: {
      type: String,
      default: ""
    }
  },
  { collection: "user" }
);
module.exports = model("User", userSchema);
