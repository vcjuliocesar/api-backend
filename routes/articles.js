'use strict'

let express = require('express');

let ArticleController = require('../controllers/article');

let router = express.Router();

//rutas
router.post("/ruta-prueba",ArticleController.datosCurso);
router.get("/ruta-test",ArticleController.test);

module.exports = router;