const mongoose = require('mongoose');

const { todoSchema } = require('../schemas/todo.schemas');

const Todo = mongoose.model('TodoList', todoSchema);

module.exports = {Todo};