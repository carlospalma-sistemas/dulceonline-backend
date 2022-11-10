const mongoose = require('mongoose');
const database = "DulceOnline";
const user = "admin";
const password = "admin";
const URI = 'mongodb+srv://'+user+':'+password+'@cluster0.pu6x2hd.mongodb.net/'+database+'?retryWrites=true&w=majority';

const conectar = async () => {
	try {
		await mongoose.connect(URI);
		console.log("Atlas en linea");
	} catch (error) {
		console.log("Error en la conexión a Atlas. "+error);
	}
}
conectar();

module.exports = mongoose;
