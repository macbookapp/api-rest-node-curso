import { Router } from "express";
import ProductosController from "../Controladores/ProductosController";

const router = Router()

module.exports = () =>{

    router.get('/productos', ProductosController.todosProductos)
    router.post('/productos', ProductosController.subirArchivo, ProductosController.nuevoProducto)


    return router
}