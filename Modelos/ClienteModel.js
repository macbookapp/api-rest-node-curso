import mongoose  from 'mongoose'

const Schema = mongoose.Schema

const ClienteSchema = new Schema({

    nombre: { 
        type: String,
        trim: true
    },
    apellido: {
         type: String,
         trim: true 
    },
    empresa: {
        type: String,
        trim: true
    }, 
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }

})

//Convertir a un modelo
const Cliente = mongoose.model('Cliente', ClienteSchema)

export default Cliente