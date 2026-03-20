const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONEXIÓN MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/sportingphoenix")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log(err));

// MODELO
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  edad: Number,
  telefono: String,
  correo: String,
  mensaje: String,
});

// RUTA PARA GUARDAR
app.post("/api/unete", async (req, res) => {
  try {
    const nuevo = new Usuario(req.body);
    await nuevo.save();

    res.send("Guardado correctamente");
  } catch (error) {
    res.status(500).send("Error al guardar");
  }
});

// SERVIDOR
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});