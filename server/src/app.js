const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const favoritosRoutes = require('./Routes/favoritos.routes');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Ruta raíz para verificar el estado del servidor
app.get('/', (req, res) => {
  res.status(200).send('Servidor backend corriendo exitosamente.');
});

//Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado exitosamente a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

//Rutas de la API
app.use('/api/favoritos', favoritosRoutes);

//Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
