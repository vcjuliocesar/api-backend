'use strict'

let express = require('express');

let ArticleController = require('../controllers/article');

let router = express.Router();

//rutas test
router.post("/ruta-prueba",ArticleController.datosCurso);
router.get("/ruta-test",ArticleController.test);

//rutas
router.post("/save",ArticleController.save);

module.exports = router;