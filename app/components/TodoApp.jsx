import React from 'react';
import uuid from 'uuid';

import ItemList from 'ItemList';
import AddTodoForm from 'AddTodoForm';
import SearchTodos from 'SearchTodos';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleSearch(data) {
    this.setState(data);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(), 
          text: text,
          completed: false
        }
      ]
    });
  }

  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1>TodoApp</h1>
        <SearchTodos onSearch={this.handleSearch} />
        <ItemList items={filteredTodos} onToggle={this.handleToggle} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }

}

export default TodoApp;