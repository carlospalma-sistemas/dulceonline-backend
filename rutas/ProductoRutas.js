const ProductoOperaciones = require("../operaciones/ProductoOperaciones");
const router = require('express').Router();

router.get("/", ProductoOperaciones.getProductos);
router.get("/:id", ProductoOperaciones.getProducto);
router.post("/", ProductoOperaciones.guardarProducto);
router.put("/:id", ProductoOperaciones.modificarProducto);
router.delete("/:id", ProductoOperaciones.borrarProducto);

module.exports = router
