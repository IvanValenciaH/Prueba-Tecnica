const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//RUTA DE PRUEBA
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor corriendo correctamente.' });
});

app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});
