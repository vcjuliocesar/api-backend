"use strict";

//Cargar modulos de node para el servidor
let express = require("express");
let bodyParser = require("body-parser");

//Ejecutar express
let app = express();

//Cargar ficheros rutas

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//Añadir prefijos a rutas

//Ruta o metodo de prueba
app.get("/test", (req, res) => {
  return res.status(200).send({
    curso: "Fullstack Nodejs",
    author: "Julio Cesar",
  });
});

//Exportar fichero actual
module.exports = app;
