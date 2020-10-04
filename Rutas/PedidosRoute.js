import { Router} from 'express'
import PedidosController from "../Controladores/PedidosController";

const router = Router()

module.exports = () => {

    router.post('/pedidos', PedidosController.nuevoPedido)

    router.get('/pedidos', PedidosController.todosPedidos)

    router.get('/pedidos/:id', PedidosController.buscarPedido)

    router.put('/pedidos/:id', PedidosController.actualizarPedido)



    return router
}