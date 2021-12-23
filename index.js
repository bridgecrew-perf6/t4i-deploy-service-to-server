const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/TaskController');

require('./config/db');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const ready = {
        status: "Welcome to Nurul's task",
    }

    res.status(200).send(ready)
})

app
  .route('/tasks')
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route('/tasks/:taskid')
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
