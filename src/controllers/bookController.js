const bookRepository = require('../repositories/bookRepository');

// Criar um novo livro
exports.createBook = async (req, res) => {
  try {
    const newBook = await bookRepository.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o livro' });
  }
};

// Listar todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookRepository.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
};

// Obter um livro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await bookRepository.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
};

// Atualizar um livro
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await bookRepository.update(req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
};

// Deletar um livro
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookRepository.delete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o livro' });
  }
};