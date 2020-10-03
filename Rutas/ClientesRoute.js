import { Router } from 'express'
import ClienteController from '../Controladores/ClienteController'

const router = Router()

module.exports = ()=>{

    router.get('/clientes', ClienteController.todosClientes)
    router.post('/clientes', ClienteController.nuevoCliente)
    router.get('/clientes/:id', ClienteController.buscarCliente)
    router.delete('/clientes/:id', ClienteController.borrarCliente)
    router.put('/clientes/:id', ClienteController.actualizarCliente)

    return router
}