// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// server.js o app.js

//const express = require('express');
//const cors = require('cors');

//const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Permitir origen de tu frontend
    credentials: true, // Permitir credenciales
};

//app.use(cors(corsOptions));

// Middleware para parsear JSON
//app.use(express.json());

// Definición de rutas
/*app.get('/message/negotiate', (req, res) => {
    // Tu lógica aquí
    res.json({ message: 'Negotiate successful' });
});
*/
// Puerto en el que escucha tu servidor
/*const PORT = process.env.PORT || 5228;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/