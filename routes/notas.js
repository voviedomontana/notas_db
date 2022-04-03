var express = require('express');
var router = express.Router();
var notasController = require("../controllers/notasController")

router.get("/crear", notasController.crear);
router.post("/crear", notasController.guardado)
router.get("/", notasController.listado)
router.get("/:id", notasController.detalle)
router.get("/editar/:id", notasController.editar)
router.post("/editar/:id", notasController.actualizar)
router.post("/borrar/:id", notasController.borrar)

module.exports = router;
