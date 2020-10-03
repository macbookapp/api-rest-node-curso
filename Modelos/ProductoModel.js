import mongoose from "mongoose";
const Schema = mongoose.Schema

const ProductoSchema = new Schema({

    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        trim: true
    },
    imagen:{
        type: String
    }

})

//Convertir a Modelo
const Producto = mongoose.model('Producto', ProductoSchema)

export default Producto