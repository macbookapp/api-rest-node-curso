
import  Cliente from '../Modelos/ClienteModel'
import { comprobar } from '../Ayudas/ayudas'

exports.todosClientes = async ( req, res ) =>{

    const clientes = await Cliente.find({})

    try {
        if(clientes.length === 0){

            res.json( {msg: 'No tienes clientes'} )

        } else{
            res.json( clientes )
        }
        

    } catch (error) {

        console.log( error )
    }
    
}

exports.nuevoCliente = async ( req, res ) =>{

    try {
        const nuevoCliente = await Cliente.create( req.body )
        res.json( nuevoCliente )

    } catch (error) {
        console.log(error)
    }
}

exports.buscarCliente = async ( req, res ) =>{
    
    const id = req.params.id
    const cliente = await comprobar( id, 'buscar' )
    res.json( cliente )

   /* try {
        const cliente = await Cliente.findById( req.params.id )
        if ( cliente ) {
            res.json( cliente )
        } else {
            res.json( { buscar: 'La id no es correcta' } )
        }
        
    } catch (error) {
        res.json( { error: 'La id no es correcta' } )
    }*/
    
}

exports.borrarCliente = async ( req, res ) => {

    //const clienteBuscado = await Cliente.findByIdAndDelete( req.params.id )

    const id = req.params.id
    const datos = await comprobar( id, 'borrar' )
    res.json( { Cliente_borrado: datos } )


}

exports.actualizarCliente = async ( req, res ) => {
    const id = req.params.id
    const actualizar = req.body
    const datos = await comprobar( id, 'actualizar', actualizar ) 
    res.json( { Cliente_actualizado: datos } )
}

