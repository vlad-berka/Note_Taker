const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const util = require('util');
// const {
//   readFromFile,
//   readAndAppend,
//   writeToFile,
// } = require('../helpers/fsUtils');

const port_number = server.listen(process.env.PORT || 3000);

const app = express();
const readFromFile = util.promisify(fs.readFile);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) => res.status(200).json(JSON.parse(data)));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/notes', (req, res) => {
  const {text, title, id} = req.body;

  readFromFile('./db/db.json')
    .then((data) => {
      let array = JSON.parse(data);
      const newEntry = {
        title: title,
        text: text,
        id: uuidv4(),
      };
  
    array.push(newEntry);
    fs.writeFileSync('./db/db.json', JSON.stringify(array));
    res.status(200).json();});
});

app.delete(`/api/notes/:id`, (req, res) => {
    const id = req.params.id;

    readFromFile('./db/db.json')
    .then((data) => {
      let array = JSON.parse(data);
      let filtered_Array = array.filter(element => element.id != id);
      fs.writeFileSync('./db/db.json', JSON.stringify(filtered_Array));
     })
    .then(res.json("deleted"));
});

app.listen(port_number, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});