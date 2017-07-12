export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text 
  }
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}