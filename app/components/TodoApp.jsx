import React from 'react';
import uuid from 'uuid';

import ItemList from 'ItemList';
import AddTodoForm from 'AddTodoForm';
import SearchTodos from 'SearchTodos';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      todos: props.todos,
      showCompleted: false,
      searchText: ''
    };
  }

  handleSearch(data) {
    this.setState({data});
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
    alert(id);
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        <SearchTodos onSearch={this.handleSearch} />
        <ItemList items={todos} onToggle={this.handleToggle} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }

}

TodoApp.defaultProps = {
  todos: [
    {
      id: uuid(),
      text: 'Walk the cat',
      completed: true
    },
    {
      id: uuid(),
      text: 'Bow to the cat',
      completed: false
    }
  ]
};

export default TodoApp;