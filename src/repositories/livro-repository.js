const mongoose = require('mongoose')
require('../models/livro')
const Livro = mongoose.model('Livro')

exports.get = async()=> {
  const result = await Livro.find({active : true});
  return result;
}

exports.create = async()=> {
  let livro = Product(data);
  await livro.save();
}

exports.delete = async (id) => {
  await Livro.findByIdAndUpdate(id, {
    $set:
    {
      active: false
    }
  });
}

exports.getById = async(id)=> {
  const result = await Livro.findOne({_id : id},"_id price genero price");
  return result;
}

exports.update = async(id,data) => {
  await Livro.findByIdAndUpdate(id, {
    $set:{
      name: data.name,
      price: data.price,
      genero: data.genero,
      id: data.id
    }
  })
}


