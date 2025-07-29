const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let tasks = [
  {
    id: uuidv4(),
    title: 'Aprender Express',
    description: 'Estudiar la documentación de Express.js y ejemplos',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Crear una aplicación utilizando React',
    description: 'Empezar desarrollando el frontend',
    completed: false,
    createdAt: new Date()
  }
];

app.get('/api/tasks', (req, res) => {
  res.status(200).json(tasks)
})

app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required'})
  }
  const newTask = {
    id: uuidv4(),
    title,
    description: description || '',
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask)
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === id)

  if(taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' })
  }

  if (title !== undefined) tasks[taskIndex].title = title;
  if (description !== undefined) tasks[taskIndex].description = description;
  if (completed !== undefined) tasks[taskIndex].completed = completed;

  res.status(200).json(tasks[taskIndex])
})

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  taks = tasks.filter(task = task.id !== id);

  if (tasks.lenth === initialLength) {
    return res.status(404).json({ message: 'Task not found' })
  }

  res.status(204).snd()
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});