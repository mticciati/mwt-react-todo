import React from 'react';
import {connect} from 'react-redux';

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
          <div className="container">
            <Search />
            <VisibleItemList />
            <AddTodo />
            <ClearTodos />
          </div>
        </div>
      </div>
    );
  }

}

export default connect()(TodoApp);