const db = require("../config/db");

//Obtener lista de clientes (GET)
const getClients = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM cliente");
    if (!data) {
      return res.status(404).send({
        sucess: false,
        message: "No se encuentran registros",
      });
    }
    res.status(200).send({
      success: true,
      message: "Lista de clientes registrados",
      totalClients: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error obteniendo el listado de clientes",
      error,
    });
  }
};

//Obtener cliente por ID
const getClientById = async (req, res) => {
  try {
    const clientId = req.params.id;
    if (!clientId) {
      return res.status(404).send({
        success: false,
        message: "Cedula errada o invalida",
      });
    }

    const data = await db.query(`SELECT * FROM cliente WHERE id_cliente=?`, [
      clientId,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No se encontraron registros con la cedula ingesada",
      });
    }
    res.status(200).send({
      success: true,
      clientsDetails: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error obteniendo el cliente",
      error,
    });
  }
};

module.exports = { getClients, getClientById };
