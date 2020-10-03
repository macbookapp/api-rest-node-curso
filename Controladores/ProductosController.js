
import Producto from '../Modelos/ProductoModel'

const multer = require('multer');
const shortid = require('shortid');

// Configuracion de multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname+'../../uploads/');
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, `${shortid.generate()}.${extension}`);
    }
})

const configuracionMulter = {
    storage: fileStorage,    
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}
// Fin Configuracion

// pasar la configuración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube un archivo 
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function(error) {
        if(error) {
            res.json({mensaje: error})
        }
        return next();
    })
}

exports.todosProductos = async (req, res )=>{

    const productos = await Producto.find({})

    if( productos.length === 0 ){
        res.json( { productos: 'No tienes ningun producto actualmente' } )

    }else {
        res.json( {Productos: productos} )
    }
    
}

exports.nuevoProducto = async( req, res, next ) =>{
    const nuevoProducto = new Producto ( req.body )
    try {
        if (req.file) {
            nuevoProducto.imagen = req.file.filename
        }
        await nuevoProducto.save()
        res.json( { Producto_añadido: nuevoProducto } )

    } catch ( error ) {
        console.log(error)
        next()
    }

}