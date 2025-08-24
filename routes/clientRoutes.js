const express = require("express");
const { getClients } = require("../controllers/clientController");

//router object
const router = express.Router();

//Rutas

//Obtener Clientes (GET)
router.get("/getall", getClients);

module.exports = router;
