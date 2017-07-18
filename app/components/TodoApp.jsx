import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

import VisibleItemList from '../containers/VisibleItemList';
import AddTodo from '../containers/AddTodo';
import ClearTodos from '../containers/ClearTodos';
import Search from '../containers/Search';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      isFetching: false
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
              <ClearTodos />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TodoApp;