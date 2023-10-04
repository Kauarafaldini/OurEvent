const express = require('express');
const db = require('../db/models/index');
const router = express.Router();

router.post("/", async (req, res) => {
    try {

    const dados = req.body;
    const novoCliente = await db.clientes.create(dados);

        return res.status(200).json({
            error: false,
            mensagem: "Cadastro efetuado com sucesso",
            dados: novoCliente
        });
    } catch (error) {
        console.error('Erro interno: ', error);
        return res.status(500).json({
            error: true,
            mensagem: "Cadastro não efetuado, Por favor tente novamente",
            });
        };
});

module.exports = router;