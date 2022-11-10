//Importación
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./conexion');
const env = process.env;
const port = env.PORT || 8080;

//Configuración
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Arranque
app.listen(port, () => {
    console.log(`API iniciado en puerto ${port}`);
});

//Rutas base
app.get("/", (req, res) => {
	res.send("API iniciado");
});
app.use("/api/categorias", require('./rutas/CategoriaRutas'));
app.use('/api/productos', require('./rutas/ProductoRutas'));
app.use('/api/clientes', require('./rutas/ClienteRutas'));
app.use('/api/login', require('./rutas/LoginRutas'));