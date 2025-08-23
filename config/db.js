//Conexion a la base de datos
const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "animalcenter",
});

module.exports = mySqlPool;
