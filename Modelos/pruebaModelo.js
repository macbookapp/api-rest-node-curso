import mongoose from 'mongoose'
const Esquema = mongoose.Schema

const pruebaEsquema = new Esquema({
    nombre: {
        type: String
    }
})

//Convertir a un modelo
const Prueba = mongoose.model('Prueba', pruebaEsquema)

export default Prueba