import React from 'react';

import itemList from 'ItemList';
import AddTodoForm from 'AddTodoForm';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handlAddTodo = this.handleAddTodo.bind(this);
    this.state = {
      todos: props.todos
    };
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
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