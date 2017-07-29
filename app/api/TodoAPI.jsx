module.exports = {

  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted 
    filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted);

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return searchText === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

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