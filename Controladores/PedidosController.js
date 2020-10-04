import Pedido from '../Modelos/PedidosModel'


exports.nuevoPedido = async ( req, res )=>{

    const pedido = new Pedido(req.body)
    try {
        await pedido.save()
        res.json( { Nuevo_pedido: pedido } )
    } catch (error) {
        console.log( error )
        res.json( { Error: 'Ha ocurrido un error' } )
    }


}

exports.todosPedidos = async (req, res)=>{

    const pedidos = await Pedido.find({}).populate('cliente').populate( { path: 'pedido.producto', model: 'Producto' } )

    if(pedidos){
        res.json( { Pedidos: pedidos } )
    }else{
        res.json( { Pedidos: 'No tienes ningún pedido por ahora' } )
    }
} 

exports.buscarPedido = async ( req, res )=>{

    try {
        const pedido = await Pedido.findById( req.params.id ).populate('cliente').populate( { path: 'pedido.producto', model: 'Producto' } )
        if( pedido ){
            res.json( { Pedido: pedido } )
        } else{
            res.json( { Buscar: 'Pedido no encontrado, revisa la id' } )
        }

    } catch ( error ) {
        console.log( error )
        res.json( { Error: 'Pedido no encontrado, revisa la id' } )
    }
}

exports.actualizarPedido = async ( req, res )=>{

    try {
        const pedido = await Pedido.findByIdAndUpdate( req.params.id, req.body, { new: true } ).populate('cliente').populate( { path: 'pedido.producto', model: 'Producto' } )
        if( pedido ){
            res.json( { Pedido_actualizado: pedido } )
        } else{
            res.json( { Buscar: 'Pedido no encontrado, revisa la id' } )
        }
    } catch ( error ) {
        console.log( error )
        res.json( { Error: 'Pedido no encontrado, revisa la id' } )
    }
    

}

exports.borrarPedido = async ( req, res )=>{
    try {
        const pedido = await Pedido.findByIdAndDelete( req.params.id ).populate('cliente').populate( { path: 'pedido.producto', model: 'Producto' } )
        if( pedido ){
            res.json( { Pedido_borrado: pedido } )
        } else{
            res.json( { Buscar: 'Pedido no encontrado, revisa la id' } )
        }

    } catch ( error ) {
        console.log( error )
        res.json( { Error: 'Pedido no encontrado, revisa la id' } )
    }

}