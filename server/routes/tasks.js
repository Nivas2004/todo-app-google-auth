import express from 'express';
const router = express.Router();

// In-memory task list
let tasks = [
  { id: 1, title: 'Sample task', completed: false }
];

// GET /tasks - get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks - add new task
router.post('/', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

export default router;