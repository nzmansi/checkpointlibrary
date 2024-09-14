const Book = require('../models/book');

// Criar um novo livro
exports.create = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

// Buscar todos os livros
exports.findAll = async () => {
  return await Book.find();
};

// Buscar um livro por ID
exports.findById = async (id) => {
  return await Book.findById(id);
};

// Atualizar um livro por ID
exports.update = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

// Deletar um livro por ID
exports.delete = async (id) => {
  return await Book.findByIdAndDelete(id);
};