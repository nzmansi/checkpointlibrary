const repository = require('../repositories/livro-repository');
const ValidationContract = require("../validator");

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao buscar livros"
    });
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  
  // Verificar se o campo `name` tem pelo menos 3 caracteres (é uma string)
  contract.hasMinLen(req.body.name, 3, "O nome deve ter ao menos 3 caracteres");
  
  // Verificar se o campo `genero` tem pelo menos 3 caracteres (é uma string)
  contract.hasMinLen(req.body.genero, 3, "O gênero deve ter ao menos 3 caracteres");

  // Verificar se `price` é um número positivo
  if (isNaN(req.body.price) || req.body.price <= 0) {
    contract.addError("price", "O preço deve ser um número positivo");
  }

  try {
    if (!contract.isValid()) {
      res.status(400).send({ message: "Erro ao cadastrar. Valide as informações.", errors: contract.errors() });
      return;
    }

    await repository.create(req.body);
    res.status(201).send({ message: "Criado com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao cadastrar. Valide as informações!", error });
  }
};

exports.put = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(req.body.price, 3, "O título deve haver ao menos 3 caracteres");
  contract.hasMinLen(req.body.genero, 3, "O gênero deve haver ao menos 3 caracteres");

  try {
    if (!contract.isValid()) {
      res.status(400).send({ message: "Erro ao atualizar. Valide as informações." });
      return;
    }

    const id = req.params.id;
    const body = req.body;

    await repository.update(id, body);
    res.status(204).send({ message: "Atualizado!" });

  } catch (error) {
    res.status(400).send({ message: "Erro ao atualizar. Valide as informações!" });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await repository.getById(req.params.id);
    if (data == null)
      res.status(404).send();

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao buscar livro"
    });
  }
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  let response = {
    id: id,
    message: "Removido"
  };
  try {
    await repository.delete(id);
    res.status(204).send(response);
  } catch (error) {
    res.status(400).send({ message: "Erro ao remover", error });
  }
};
