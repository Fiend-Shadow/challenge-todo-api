const mongoose = require("mongoose");
const Todo = require("./../models/Todo");

const todo = [
  {
    title: "todo1",
    body : "body1"
  },
  {
    title: "todo2",
    body : "body2"
  },
  {
    title: "todo3",
    body : "body3"
  },
  {
    title: "todo4",
    body : "body4"
  }
];
// MONGOOSE CONNECTION //
mongoose
  .connect('mongodb://localhost:27017/todo-challenge-ironhack-2019', {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  })
  .then(() => {
    const pr = Todo.create(todo);
    return pr;
  })
  .then(createdtodos => {
    console.log(createdtodos);
    mongoose.connection.close();
  })
  .catch(err => console.error(err));