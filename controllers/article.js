"use strict";

let controller = {
  datosCurso: (req, res) => {
    return res.status(200).send({
      curso: "Fullstack Nodejs",
      author: "Julio Cesar",
    });
  },

  test : (req,res) => {
      return res.status(200).send({
          message: "Soy un test"
      });
  }
};

module.exports = controller;
