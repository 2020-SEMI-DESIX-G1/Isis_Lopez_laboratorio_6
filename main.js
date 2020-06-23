const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World2')
})
 
app.listen(3000, ()=> console.log('EJECUTANDO SERVIDOR EN EL PUERTO 3000'));