import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import db  from '../DB/database'

const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//DB
//console.log( db )

//Rutas
//import IndexRoute from '../Rutas/IndexRoute'
//import ClientesRoute from '../Rutas/ClientesRoute'

//app.use('/', IndexRoute())
//app.use('/', ClientesRoute())

//Importamos las rutas del modulo Rutas
import { 

  IndexRoute, 
  ClientesRoute,
  ProductosRoute

} from '../Rutas/Rutas'

app.use('/', IndexRoute())
app.use('/', ClientesRoute())
app.use('/', ProductosRoute())


app.listen(port, () => {
  console.log(`Servidor en 127.0.0.1:${port}`);
});