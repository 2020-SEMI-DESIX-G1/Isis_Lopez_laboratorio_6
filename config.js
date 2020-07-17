//require('dotenv').config()
const express = require('express');
//const express = require('express');
const app = express();



const route = require('./ruta/estudiantes');

const PORT = 3000;



// Intermediarios
app.use(express.json());
app.use('estudiantes', route);




const serv = http.createServer(app);
ServiceWorkerRegistration.listen(port);
console.log.debug('SERVER ARRIBA');