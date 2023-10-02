const express = require('express');

const db = require('../db/models/index');

const router = express.Router();

router.get('/', async (req, res) => {

    try{
        const { nome, email } = req.query;

        let buscar = {};

        if (nome) {
            buscar.nome = nome;
        }
        if (email) {
            buscar.email = email;
        }
        const clientes = await db.clientes.findAll({ where: buscar});

        return res.json({
            error: false,
            mensagem: 'Busca efetuada com sucesso',
            dados: clientes
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            mensagem: 'Erro ao buscar cliente'
        });
    }
});

module.exports = router;