import express from 'express';
import indexRutas from '../Rutas/indexRutas'
import PruebaRutas from '../Rutas/PruebaRutas'
import bodyParser from 'body-parser'
import db  from '../DB/database'

const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DB
//console.log( db )

//Rutas
app.use('/', indexRutas())
app.use('/', PruebaRutas())



app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});