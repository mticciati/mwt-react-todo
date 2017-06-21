import React from 'react';

import ItemList from 'ItemList';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        {ItemList(todos)}
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