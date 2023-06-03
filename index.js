const methodOverride = require('method-override'); //habilita metodos put y delete
const express = require('express');
const app = express();

const PORT = 3000;

/*middlewares*/
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false})); //decodifica la info de los formularios
app.use(express.json());


const mainRouter = require('./src/routes/mainRouter');
app.use("/", mainRouter); //prefijo

const productosRouter = require('./src/routes/productosRouter');
app.use("/productos", productosRouter); //prefijo

const productosApiRouter = require('./src/routes/api/productosApiRouter');
app.use(("/api", productosApiRouter)); //prefijo

app.listen(PORT, ()=> {
    console.log(`aplicación ejecutada en http://localhost:${PORT}`);
})