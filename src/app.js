import express from 'express';

import bodyParser from 'body-parser'
import db  from '../DB/database'

const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DB
//console.log( db )

//Rutas
import IndexRoute from '../Rutas/IndexRoute'
import ClientesRoute from '../Rutas/ClientesRoute'

app.use('/', IndexRoute())
app.use('/', ClientesRoute())




app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});