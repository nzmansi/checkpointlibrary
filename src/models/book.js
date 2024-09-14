const mongoose = require('mongoose');

// Definindo o esquema do modelo Book
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

// Exportando o modelo Book
module.exports = mongoose.model('Book', bookSchema);