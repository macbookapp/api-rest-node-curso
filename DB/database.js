import mongoose from 'mongoose'

//mongoose.connect('mongodb://localhost/pruebas', { useNewUrlParser: true })
const database = 'pruebas'
const url = `mongodb://127.0.0.1:27017/${database}`

const opciones = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const db = mongoose.connect(url, opciones).then(
    () => { console.log( `Conectado a MongoDB: ${database.toUpperCase()}` ) },
    err => { err }
)

module.exports = db