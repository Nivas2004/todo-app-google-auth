import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Use the tasks router for /tasks endpoints
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});