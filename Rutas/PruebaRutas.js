import { Router } from 'express'
import PruebaController from '../Controladores/PruebaController'
const rutas = Router()

module.exports = ()=>{

    rutas.get('/pruebas', PruebaController.todos)
    rutas.post('pruebas', PruebaController.nuevo)

    return rutas
}