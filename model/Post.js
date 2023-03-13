const mongoose = require("../config/conexao");

const postSchema = new mongoose.Schema({
  titulo: String,
  texto: String,
  autor: String,
  data: Date,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario",
  },
});

const post = mongoose.model("post", postSchema);

module.exports = post;
