
import  Cliente from '../Modelos/ClienteModel'

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