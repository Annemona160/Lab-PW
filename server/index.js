const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });

 const Project = require('./models/Project');

app.use(express.json()); 
const PORT = 3000;
// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});



/*// GET /api/projects/:id returnează un singur proiect după id
app.get('/api/projects/:id', function (req, res) {
  const id = parseInt(req.params.id); 
  const project = projects.find(p => p.id === id); 

  if (project) {
    res.json(project);
  } else {
    // Dacă id-ul nu există, trimitem eroare 404
    res.status(404).json({ error: 'Not found' });
  }
});


// GET /api/stats returnează statistici: total, finalizate, în lucru
app.get('/api/stats', function (req, res) {
  const stats = {
    total: projects.length,
    finalizate: projects.filter(p => p.done).length,
    inLucru: projects.filter(p => !p.done).length
  };
  res.json(stats);
});
*/


app.get('/api/projects', async function(req, res) {
 try {
 const projects = await Project.find();
 res.json(projects);
 } catch (err) {
 res.status(500).json({ error: 'Eroare ' + err });
 }
});



// POST /api/projects - adauga un proiect nou
app.post('/api/projects', async function(req, res) {
  try{
    const newProject = new Project ({
      title: req.body.title,
      tech: req.body.tech,
      done: req.body.done || false,
  });
  const saved = await newProject.save();
  res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
});



//DELETe /api/projects - sterge un proiect dupa ID
 app.delete('/api/projects/:id', function(req, res) {
  const id = parseInt(req.params.id); 
  const index = projects.findIndex(p => p.id === id);

  if (index !== -1) {
     projects.splice(index, 1)
     res.json({ message: 'Deleted' })
  } else {
    res.status(404).json({ error: 'Not found' })
  }
 })



// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});