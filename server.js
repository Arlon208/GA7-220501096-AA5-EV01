//Realizado por Arturo Londono Munoz para la evidencia GA7-220501096-AA5-EV01
//CRUD en node + Express, base de datos MySQL
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

//configuracion dotenv
dotenv.config();

//rest object

const app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//rutas
app.use("/api/v1/clientes", require("./routes/clientRoutes"));

app.get("/test", (req, res) => {
  res.status(200).send("<h1>ClientesCRUD APP</h1>");
});

//Puerto
const PORT = process.env.PORT || 8000;

//conditionally Listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    //MySQL
    console.log("Base de datos Conectada".bgCyan.white);
    //Listen
    app.listen(PORT, () => {
      console.log(
        `Server Usando el puerto http://localhost:${process.env.PORT}`.bgMagenta
          .white
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
