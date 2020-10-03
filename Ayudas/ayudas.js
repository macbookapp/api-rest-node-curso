import Cliente from '../Modelos/ClienteModel'


//Funcion buscar cliente por id y comprobar que existen datos
async function comprobar( id, query, respuesta={} ) {
    switch (query) {

        case 'buscar':
             try {
                const cliente = await Cliente.findById( id )
                if ( cliente ) {
                    return cliente 

                } else {
                    return { buscar: 'No existe el cliente, comprueba la id' }
                }

            } catch (error) {
                return { error: 'No existe el cliente, comprueba la id' } 
            }
            break;
            
        case 'borrar':
            
            try {
                const cliente = await Cliente.findByIdAndDelete( id )
                if ( cliente ) {
                    return cliente 

                } else {
                    return { buscar: 'No existe el cliente, comprueba la id' }
                }

            } catch (error) {
                return { error: 'No existe el cliente, comprueba la id' } 
            }
            break;

            case 'actualizar':
            
                try {
                    const cliente = await Cliente.findByIdAndUpdate( id, respuesta, { new:true } )
                    if ( cliente ) {
                        return cliente 
    
                    } else {
                        return { buscar: 'No existe el cliente, comprueba la id' }
                    }
    
                } catch (error) {
                    return { error: 'No existe el cliente, comprueba la id' } 
                }
                break;
                
            
        default:
            break;
    }
   
    
}


module.exports = {
    comprobar
}