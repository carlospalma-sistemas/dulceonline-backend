const ProductoModelo = require("../modelos/ProductoModelo");
const ProductoOperaciones = {};

ProductoOperaciones.getProductos = async(req, res) => {
    try {
        const query = req.query;
        let productos = [];
        if (query.q == null) {
            productos = await ProductoModelo.find(query);
        } 
        else {
            productos = await ProductoModelo.find({
                "$or" : [ 
                    {"nombre": {$regex:query.q, $options:"i"}},
                    {"marca": {$regex:query.q, $options:"i"}},
                    {"categorias": {$regex:query.q, $options:"i"}}
                ]
            });
        }
        res.status(200).send(productos);
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.getProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const producto = await ProductoModelo.findById(id);
        if (producto == null) {
            res.status(404).send("No se encontraron datos")    
        }
        else {
            res.status(200).send(producto);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.guardarProducto = async(req, res) => {
    try {
        const body = req.body;
        const producto = new ProductoModelo(body);
        const productoGuardado = await producto.save();
        res.status(201).send(productoGuardado);
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.modificarProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const datosModificar = {
            nombre: body.nombre,
            marca : body.marca,
            precio: body.precio,
            categorias: body.categorias,
            imagen: body.imagen,
            disp: body.disp
        }
        const productoModificado = await ProductoModelo.findByIdAndUpdate(id, datosModificar, {new: true} )
        if (productoModificado!= null) {
            res.status(200).send(productoModificado);
        }
        else {
            res.status(404).send("No se encontraron datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.borrarProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const productoBorrado = await ProductoModelo.findByIdAndDelete(id);
        if (productoBorrado == null) {
            res.status(404).send("No se encontraron datos"); 
        }
        else {
            res.status(200).send(productoBorrado);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = ProductoOperaciones;
 