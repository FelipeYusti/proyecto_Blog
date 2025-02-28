// CONTROLLER USUARIO
const User = require("../models/usuarios.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const insertUser = async (req, res) => {
  let data = {
    userName: req.body.userName,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    pais: req.body.pais,
  };

  const usuarioExiste = await User.findOne({ userName: data.userName });

  if (usuarioExiste) {
    return res.status(400).send({
      estado: false,
      mensaje: "El usuario ya está registrado en el Sistema.",
    });
  }

  try {
    const registerUser = new User(data);
    await registerUser.save();
    return res.status(200).send({
      estado: true,
      mensaje: "Usuario registrado correctamente",
    });
  } catch (error) {
    return res.status(400).send({
      estado: false,
      mensaje: `error: ${error}`,
    });
  }
};

const loginUser = async (req, res) => {
  let userExist = await User.findOne({ userName: req.body.userName });

  if (!userExist) {
    return res.status(500).send({
      estado: false,
      mensaje: "No existe el usuario",
    });
  }
  // seleccionamos los datos que necesitamos en el front : id y nombre de usuario
  dataUser = { user_id: userExist.id, user: userExist.userName };

  if (bcrypt.compareSync(req.body.password, userExist.passwordHash)) {
    return res.status(200).send({
      estado: true,
      mensaje: "Inicio de sesion Correctamente.",
      infoUser: dataUser,
    });
  } else {
    return res.status(400).send({
      estado: false,
      mensaje: "Contraseña Incorrecta, Intente de Nuevo.",
    });
  }
};
const updatePass = async (req, res) => {
  let idUser = req.params.id;
  let data = {};
};
module.exports = {
  insertUser,
  updatePass,
  loginUser,
};
