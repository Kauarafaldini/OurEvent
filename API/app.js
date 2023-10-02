const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();

});

app.use(cors());

const clientes = require("./controles/clientes");

const clientesRouter = require('./controles/busca');

app.use("/clientes", clientesRouter)

app.use("/clientes", clientes);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
}); 