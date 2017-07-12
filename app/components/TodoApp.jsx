import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import VisibleItemList from '../containers/VisibleItemList';
import AddTodo from '../containers/AddTodo';
import Search from '../containers/Search';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  }

  render() {
    return (
      <div>
        <h1 className="page-title">TodoApp</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search />
              <VisibleItemList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TodoApp;