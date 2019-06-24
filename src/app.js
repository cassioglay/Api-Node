const express = require("express");
const bodyParser = require("body-parser");
const mongoose =  require("mongoose");


const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb://localhost:27017/apiNode');

//Carrega as rotas...
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;