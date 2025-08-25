const db = require("../config/db");

//Obtener lista de clientes (GET)
const getClients = async (req, res) => {
  try {
    //variable que guarda la sentencia SQl que trae la totalidad de datos
    const data = await db.query("SELECT * FROM cliente");
    //Verifica si existen datos en caso de que no lanza error 404
    if (!data) {
      return res.status(404).send({
        sucess: false,
        message: "No se encuentran registros",
      });
    }
    //trae el listado de datos e informa que se hizo de forma sactisfactoria
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

//Crear cliente  (Metodo POST)
const createClient = async (req, res) => {
  try {
    const { id_cliente, nombre, ciudad, direccion, telefono } = req.body;
    if (!id_cliente || !nombre || !ciudad || !direccion || !telefono) {
      return res.status(500).send({
        sucess: false,
        message: "Por favor complete todos lo campos",
      });
    }
    const data = await db.query(
      `INSERT INTO cliente (id_cliente, nombre, ciudad, direccion, telefono) VALUES (?, ?, ?, ?, ?)`,
      [id_cliente, nombre, ciudad, direccion, telefono]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error al insertar el QUERY",
      });
    }

    res.status(201).send({
      success: true,
      message: "Cliente creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error al Crear Cliente API",
      error,
    });
  }
};

//Actualizar Estudiantes (PUT)
const updateClient = async (req, res) => {
  try {
    const clienteId = req.params.id; //obtiene el id ingresado en la url
    if (!clienteId) {
      return res.status(404).send({
        success: false,
        message: "Cedula invalida o no encontrada",
      });
    }
    const { nombre, ciudad, direccion, telefono } = req.body;
    //Sentencia SQL que se envia a la BD
    const data = await db.query(
      `UPDATE cliente SET nombre = ?, ciudad = ?, direccion = ?, telefono = ? WHERE id_cliente = ?`,
      [nombre, ciudad, direccion, telefono, clienteId]
    );
    //Verifica si los datos estan completos
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error actualizando datos",
      });
    }
    //Verificacion si el Id existe en la bd y se realizo la actualizacion
    if (data[0].affectedRows === 0) {
      return res.status(404).send({
        success: false,
        message:
          "No se encontró un cliente con la cédula proporcionada o no se realizaron cambios.",
      });
    }
    //Alerta de actualizacion realizada
    res.status(200).send({
      success: true,
      message: "cliente actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error en el modulo de actulizacion",
      error,
    });
  }
};

//Eliminar cliente (DELETE)
const deleteClient = async (req, res) => {
  try {
    //Validacion de que el id no este vacio ni sea distinto de un numero
    const clientId = req.params.id;
    if (!clientId || isNaN(clientId)) {
      return res.status(404).send({
        sucess: false,
        message: "Escriba un numero de identificacion valido",
      });
    }
    //Sentencia SQL que envia la orden de eliminar a la BD
    const [result] = await db.query(
      `DELETE FROM cliente WHERE id_cliente = ?`,
      [clientId]
    );
    //Verificacion si existe la cedula en la BD y se elimino o no
    if (result.affectedRows === 0) {
      return res.status(404).send({
        success: false,
        message: "No se encontró un cliente con esa identificación.",
      });
    }
    //Aviso de eliminacion sactisfactoria
    res.status(200).send({
      success: true,
      messag: "Cliente eliminado correctamente",
    });
  } catch (error) {
    //Manejo de error
    console.log(error);
    res.status(500),
      send({
        sucess: false,
        message: "Error en el modulo eliminar API",
        error,
      });
  }
};
//Exportacion de modulos para uso en otros archivos como en las rutas
module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
