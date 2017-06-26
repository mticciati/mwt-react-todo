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
  },

  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted 
    filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted);

    return filteredTodos;
  }
}