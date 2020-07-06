"use strict";

let validator = require("validator");
let Article = require("../models/article");

let controller = {
  datosCurso: (req, res) => {
    return res.status(200).send({
      curso: "Fullstack Nodejs",
      author: "Julio Cesar",
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy un test",
    });
  },

  save: (req, res) => {
    //recoger datos por post
    let params = req.body;
    //validar datos (validator)
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (error) {
      return res.status(200).send({
        message: "Faltan datos por enviar !",
      });
    }

    if (validate_title && validate_content) {
      return res.status(200).send({
        message: "Validacion correcta",
      });
    } else {
      return res.status(200).send({
        message: "woops,something went wrong",
      });
    }

    //crear un objeto a guardar

    //Asignar valores

    //Guardar valores

    //Devolver unas respuesta
  },
};

module.exports = controller;
