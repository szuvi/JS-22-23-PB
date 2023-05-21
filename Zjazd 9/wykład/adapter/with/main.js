import express from 'express';
import { getUser } from './userService.js';
import { getTask } from './taskService.js';
import { generateId } from './uuid.js';

const app = express();
app.use(express.json());

app.get('/', function mainController(req, res) {
  res.send(`Unique id is: ${generateId()}`);
});

app.get('/user', function userController(req, res) {
  const user = getUser();
  res.send(user);
});

app.get('/task', function taskController(req, res) {
  const task = getTask();
  res.send(task);
});

app.listen(5395, function onStart() {
  console.log('App running on port 5395');
});
