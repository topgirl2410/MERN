import express from 'express';
import conectarDB from './config/db.js';

const app = express();

conectarDB();


// Creando el servidor
app.listen(4000, () => {
    console.log("Servidor conectado en el puerto 4000")
})