import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoadingSpinner from 'LoadingSpinner';
import TodoAPI from 'TodoAPI';
import Item from 'Item';

const renderItems = (state, onToggle) => {
  let {todos, showCompleted, searchText} = state;
  let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
  if (filteredTodos.length === 0) {
    return (
      <p className="container__message">Nothing To Do!</p>
    );
  }
  return (
    filteredTodos.map((item) => <Item key={item.id} {...item} onToggle={() => onToggle(item.id, item.completed)} />)
  );
}

const ItemList = ({state, onToggle}) => (
  <div>
    <div className="item-list">
      {state.fetching === true ? 
        <LoadingSpinner /> :
        renderItems(state, onToggle)
      }
    </div>
  </div> 
)

ItemList.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default ItemList;