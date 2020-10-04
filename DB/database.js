import mongoose from 'mongoose'

const database = 'pruebas'

const url = `mongodb://127.0.0.1:27017/${database}`

const opciones = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const db = mongoose.connect(url, opciones).then(
    () => { console.log( `Conectado a MongoDB => ${database.toUpperCase()}.db` ) },
    err => { err }
)

module.exports = db