'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const livroSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  id: {
    type: Number,
    require: true,
    trim: true
  },
  genero: {
    type: String,
    require: true,
    trim: true
  },
  price: {
    type: Number,
    require: true,
    trim: true
  }

  
});

const Livro = mongoose.model('Livro',livroSchema)

module.exports = Livro;
