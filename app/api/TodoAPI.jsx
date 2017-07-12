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

    // filter by searchText
    if (searchText.length > 0) {
     filteredTodos = filteredTodos.filter((todo) => todo.text.toLowerCase().includes(searchText));
    }

    // sort todos by non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }

    });

    return filteredTodos;
  },

  clearTodos: function() {
    localStorage.removeItem('todos');
    if (localStorage.getItem('todos') !== null) {
      return false;
    }
    return true;
  }
}