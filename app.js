const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

const ESTUDIANTES = [
    {
        nombre: "Jane Villanueva",
        edad: "23"
    },
    {
        nombre: "Raphael Solano",
        edad: "25"
    },
    {
        nombre: "Patricia Montes",
        edad: "22"
    },
    {
        nombre: "Carlos Moreno",
        edad: "21"
    },
    {
        nombre: "Christian Cortez",
        edad: "18"
    },
    {
        nombre: "Jhon Samudio",
        edad: "24"
    }

];
//Intermediario
app.use(bodyParser.json());


// GET Lista todos los estudiantes
app.get('/estudiantes/', (req,res) => {
    res.json(ESTUDIANTES);
});

// POST Añade nuevo estudiante
app.post('/estudiantes/', (req,res) => {
        ESTUDIANTES.push(req.body);
        res.json(req.body);
});

// GET retorna estudiante por ID
app.get('/estudiantes/:id', (req,res) => {
    res.json(
        ESTUDIANTES[req.params.id]
    );
});

// PUT Actualiza estudiante por ID
app.put('/estudiantes/:id', (req,res) => {
   ESTUDIANTES[req.params.id].nombre = req.body.nombre;
   ESTUDIANTES[req.params.id].edad = req.body.edad;
   res.send("Estudiante Actualizado!");
});

// DELETE Elimina estudiante por ID
app.delete('/estudiantes/:id', (req,res) => {
    ESTUDIANTES.splice(req.params.id,1);
    res.send("Estudiante Eliminado");
 });


 app.listen(port, () => console.log('Ejecutandose en el puerto:'+port));