import Prueba from '../Modelos/pruebaModelo'

exports.todos = async( req, res ) =>{

    const datos = await Prueba.find({})
    console.log(datos)
    res.send( datos )

}

exports.nuevo = async ( req, res )=>{

    const nuevoDato = req.body
    console.info( nuevoDato )

    try {
        const nueva_prueba = await Prueba.create ( nuevoDato )
        res.json( { nueva_prueba } )
    } catch ( error ) {
        console.error( error )
    }
} 