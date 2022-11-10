const CategoriaOperaciones = require("../operaciones/CategoriaOperaciones");
const router = require('express').Router();

router.get("/", CategoriaOperaciones.getCategorias);
router.get("/:id", CategoriaOperaciones.getCategoria);
router.post("/", CategoriaOperaciones.guardarCategoria);
router.put("/:id", CategoriaOperaciones.modificarCategoria);
router.delete("/:id", CategoriaOperaciones.borrarCategoria);

module.exports = router
