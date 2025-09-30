const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function start() {
  await client.connect();
  const db = client.db('crud_maquinas');
  collection = db.collection('maquinas');
  app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
}

start();

// Rotas CRUD
app.get('/maquinas', async (req, res) => {
  const maquinas = await collection.find().toArray();
  res.json(maquinas);
});

app.post('/maquinas', async (req, res) => {
  const maquina = req.body;
  await collection.insertOne(maquina);
  res.status(201).json({ message: 'Máquina adicionada!' });
});

app.put('/maquinas/:id', async (req, res) => {
  const id = req.params.id;
  const novaMaquina = req.body;
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: novaMaquina });
  res.json({ message: 'Máquina atualizada!' });
});

app.delete('/maquinas/:id', async (req, res) => {
  const id = req.params.id;
  await collection.deleteOne({ _id: new ObjectId(id) });
  res.json({ message: 'Máquina deletada!' });
});
