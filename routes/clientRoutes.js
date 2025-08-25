const express = require("express");
const {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

//router object
const router = express.Router();

//Rutas

//Obtener Clientes (GET)
router.get("/getall", getClients);

//Obtener Clientes por ID (cedula) (Metodo GET)
router.get("/get/:id", getClientById);

//Crear Cliente (Metodo POST)
router.post("/create", createClient);

//Actualizar Clientes
router.put("/update/:id", updateClient);

//Eliminar Cliente
router.delete("/delete/:id", deleteClient);

module.exports = router;
