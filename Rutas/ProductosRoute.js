import { Router } from "express";
import ProductosController from "../Controladores/ProductosController";

const router = Router()

module.exports = () =>{

    router.get('/productos', ProductosController.todosProductos)

    router.post('/productos', ProductosController.subirArchivo, ProductosController.nuevoProducto)

    router.get('/productos/:id', ProductosController.buscarProducto)

    router.put('/productos/:id', ProductosController.subirArchivo, ProductosController.actualizarProducto)

    router.delete('/productos/:id', ProductosController.borrarProducto)

    return router

}