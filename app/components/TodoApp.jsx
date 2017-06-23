import React from 'react';
import uuid from 'uuid';

import itemList from 'ItemList';
import AddTodoForm from 'AddTodoForm';
import SearchTodos from 'SearchTodos';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
          text: text
        }
      ]
    });
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        <SearchTodos onSearch={this.handleSearch} />
        {itemList(todos)}
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }

}

TodoApp.defaultProps = {
  todos: [
    {
      id: uuid(),
      text: 'Walk the cat'
    },
    {
      id: uuid(),
      text: 'Bow to the cat'
    }
  ]
};

export default TodoApp;