const mongoose = require('../config/conexao');

const usuarioSchema = new mongoose.Schema({
    nome:  String,
    email: String,
    senha: String

});

const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario
