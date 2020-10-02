

import  Cliente from '../Modelos/ClienteModel'

exports.todosClientes = async ( req, res ) =>{

    const clientes = await Cliente.find({})

    try {
        if(clientes.length === 0){
            res.json( {msg: 'No tienes clientes'} )
        }else{
            console.log(clientes)
            res.json( clientes )
        }
        

    } catch (error) {

        console.log( error )
    }
    
}