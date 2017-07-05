import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import VisibleItemList from '../containers/VisibleItemList';
import AddTodoForm from 'AddTodoForm';
import SearchTodos from 'SearchTodos';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleToggle = this.handleToggle.bind(this);
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  // handleToggle(id) {
  //   let updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });

  //   this.setState({ todos: updatedTodos });
  // }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">TodoApp</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTodos onSearch={this.handleSearch} />
              <VisibleItemList />
              <AddTodoForm onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TodoApp;