// CONTROLLER USUARIO
const User = require("../models/usuarios.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const listUser = async () => {
  try {
    let listUsers = await Usuario.find().exec();
    res.status(200).send({
      Exito: true,
      data: listaUsuarios,
      mensaje: "Exito en la consulta",
    });
  } catch (error) {
    res.status(500).send({
      Exito: false,
      mensaje: "Error, en la consulta.",
    });
  }
};
const insertUser = async () => {};
const searchByIdUser = async () => {};
const updateUser = async () => {};
const deleteUser = async () => {};
const loginUser = async () => {};
module.exports = {
  listUser,
  insertUser,
  searchByIdUser,
  updateUser,
  deleteUser,
  loginUser,
};
