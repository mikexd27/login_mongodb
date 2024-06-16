const express = require('express')
const conectarBD = require('./public/config/db')
const config = require('./public/config/global')
const cors = require('cors')

const app = express()

conectarBD()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/users', require('./public/routes/usuario'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`El servidor esta corriendo en el puerto ${config.port}, http://localhost:4000`)
})