const express = require('express');
const router = express.Router();
const Usuario = require('../models').usuario;

//cadastro de usuario
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const us = await Usuario.create({ email, senha });
        res.status(200).json({ message: 'Cadastro com sucesso', us });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao cadastrar usuário', error });
    }
});
module.exports = router; 