const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const ip = "192.168.10.102";

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

app.listen(port, ip, () => {
    console.log(`Servidor iniciado na porta ${port}: http://${ip}:${port}`);
}); 