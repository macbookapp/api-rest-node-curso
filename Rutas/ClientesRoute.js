import { Router } from 'express'
import ClienteController from '../Controladores/ClienteController'

const router = Router()

module.exports = ()=>{

    router.get('/clientes', ClienteController.todosClientes)
    router.post('/clientes', ClienteController.nuevoCliente)


    return router
}