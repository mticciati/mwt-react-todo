import React from 'react';

import itemList from 'ItemList';
import AddTodoForm from 'AddTodoForm';
import SearchTodos from 'SearchTodos';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handlAddTodo = this.handleAddTodo.bind(this);
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
    alert('new todo: ' + text);
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
      id: 1,
      text: 'Walk the cat'
    },
    {
      id: 2,
      text: 'Bow to the cat'
    }
  ]
};

export default TodoApp;