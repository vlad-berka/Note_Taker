const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.status(201).json(db);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/notes', (req, res) => {
  const {text, title, id} = req.body;

  const newEntry = {
    title: title,
    text: text,
    id: uuidv4(),
  };

  db.push(newEntry);
  fs.writeFileSync('./db/db.json', JSON.stringify(db));

  res.status(201).json(newEntry);
});

app.delete(`/api/notes/:id`, (req, res) => {
  const id = req.params.id;

  let filtered_Array = db.filter( (element)=> element.id != id);

  fs.writeFileSync('./db/db.json', JSON.stringify(filtered_Array));

  res.status(201).id;
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});