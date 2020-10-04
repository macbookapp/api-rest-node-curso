import  mongoose  from "mongoose";

const Schema = mongoose.Schema

const PedidoSchema = new Schema({

    cliente: {
        type: Schema.ObjectId,
        ref: 'Cliente'
    },
    
    pedido: [{

        producto:{
            type: Schema.ObjectId,
            ref: 'Producto'
        },
        cantidad: Number
    }],

    total: Number


})



// Convertir a modelo

const Pedido = mongoose.model('Pedido', PedidoSchema)
export default Pedido