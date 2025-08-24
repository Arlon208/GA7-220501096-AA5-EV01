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

module.exports = { getClients };
