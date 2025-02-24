// RUTA USUARIO
const express = require("express");
const router = express.Router();

const userCtr = require("../controllers/usuarios.js");
router.post("/user/newUser", userCtr.insertUser);
router.post("/user/loginUser", userCtr.loginUser);
router.get("/user/showUsers", userCtr.listUser);
router.get("/user/showUserById", userCtr.searchByIdUser);
router.put("/user/updateUser", userCtr.updateUser);
router.put("/user/deleteUser", userCtr.deleteUser);
