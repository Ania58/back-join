const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
const cors = require('cors');

// Habilitar CORS para todas las solicitudes
app.use(cors());

const PORT = process.env.PORT || 5000
const routes = require('./routes/tasks');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})
