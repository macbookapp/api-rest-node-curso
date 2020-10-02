import mongoose  from 'mongoose'
const Schema = mongoose.Schema

const ClienteSchema = new Schema({

    nombre: { type: String },
    apellido: { type: String },
    empresa: { type: String }, 
    telefono: { type: String }

})

//Convertir a un modelo
const Cliente = mongoose.model('Cliente', ClienteSchema)

export default Cliente