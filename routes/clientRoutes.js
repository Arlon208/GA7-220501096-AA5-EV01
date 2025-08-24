const express = require("express");
const {
  getClients,
  getClientById,
} = require("../controllers/clientController");

//router object
const router = express.Router();

//Rutas

//Obtener Clientes (GET)
router.get("/getall", getClients);

//Obtener Clientes por ID (cedula)
router.get("/get/:id", getClientById);

module.exports = router;
