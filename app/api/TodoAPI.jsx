import $ from 'jQuery';
module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    let todosString = localStorage.getItem('todos'),
    todos = [];
    
    try {
      todos = JSON.parse(todosString);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  }
}