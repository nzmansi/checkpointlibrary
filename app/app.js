const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB
const mongoConnStr = 'mongodb+srv://user:pass@checkpointdb.x6bpf.mongodb.net/?retryWrites=true&w=majority&appName=checkpointdb';
mongoose.connect(mongoConnStr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err));

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', bookRoutes); // Prefixo para as rotas do livro

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});