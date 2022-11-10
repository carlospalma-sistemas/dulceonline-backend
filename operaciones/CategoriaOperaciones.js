const CategoriaModelo = require("../modelos/CategoriaModelo");
const CategoriaOperaciones = {};

CategoriaOperaciones.getCategorias = async(req, res) => {
    try {
        const filtro = req.query;
        const categorias = await CategoriaModelo.find(filtro);
        res.status(200).send(categorias);
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.getCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoria = await CategoriaModelo.findById(id);
        if (categoria == null) {
            res.status(404).send("No se encontraron datos");
        }
        else {
            res.status(200).send(categoria);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.guardarCategoria = async(req, res) => {
    try {
        const body = req.body;
        const categoria = new CategoriaModelo(body);
        const categoriaGuardada = await categoria.save();
        res.status(201).send(categoriaGuardada);
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.modificarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const datos = {
            nombre: body.nombre,
            imagen: body.imagen,
            hab: body.hab
        }
        const categoriaModificada = await CategoriaModelo.findByIdAndUpdate(id, datos, {new: true});
        console.log(categoriaModificada);
        if (categoriaModificada!= null) {
            res.status(200).send(categoriaModificada);
        }
        else {
            res.status(404).send("No se encontraron datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.borrarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoriaBorrada = await CategoriaModelo.findByIdAndDelete(id);
        if (categoriaBorrada == null) {
            res.status(404).send("No se encontraron datos");
        }
        else {
            res.status(200).send(categoriaBorrada);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = CategoriaOperaciones;
