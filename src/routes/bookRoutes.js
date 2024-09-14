const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Definindo as rotas para o recurso 'book'
router.post('/books', bookController.createBook); // Criar um novo livro
router.get('/books', bookController.getAllBooks); // Obter todos os livros
router.get('/books/:id', bookController.getBookById); // Obter um livro por ID
router.put('/books/:id', bookController.updateBook); // Atualizar um livro por ID
router.delete('/books/:id', bookController.deleteBook); // Deletar um livro por ID

module.exports = router;