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



// GET /api/projects/:id returnează un singur proiect după id
app.get('/api/projects/:id', async function (req, res) {
  try{
  const project = await Project.findById(req.params.id)
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
} catch (err) {
   res.status(404).json({ error: 'Not found' });
}
});

/*
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



//DELETE /api/projects - sterge un proiect dupa ID
 app.delete('/api/projects/:id', async function(req, res) {
  try{
  const id = (req.params.id); 
  const deletedProject = await Project.findByIdAndDelete(req.params.id)

  if (deletedProject) {
    res.json({ message: 'Deleted' })
  }else {
    res.status(404).json({ error: 'Not found' })
  }
} catch (err) {
  res.status(404).json({ error: 'Not found' })
}
 });



// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});