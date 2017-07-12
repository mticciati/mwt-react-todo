import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoAPI from 'TodoAPI';

import Item from 'Item';

const renderItems = (state, onToggle) => {
  let {todos, showCompleted, searchText} = state;
  if (todos.length === 0) {
    return (
      <p className="container__message">Nothing To Do!</p>
    );
  }
  return (
    TodoAPI.filterTodos(todos, showCompleted, searchText)
      .map((item) => <Item key={item.id} {...item} onToggle={() => onToggle(item.id)} />)
  );
}

const ItemList = ({state, onToggle}) => (
  <div>
    <div className="item-list">
      {renderItems(state, onToggle)}
    </div>
  </div> 
)

ItemList.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default ItemList;