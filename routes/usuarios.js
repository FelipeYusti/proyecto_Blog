// RUTA USUARIO
const express = require("express");

const router = express.Router();
const userCtr = require("../controllers/usuarios.js");
router.post("/user/newUser", userCtr.insertUser);
router.post("/user/loginUser", userCtr.loginUser);
router.put("/user/updateUser", userCtr.updatePass);

module.exports = router;
