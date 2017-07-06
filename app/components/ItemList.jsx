import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Item from 'Item';

const renderItems = (items, onToggle) => {
  if (items.length === 0) {
    return (
      <p className="container__message">Nothing To Do!</p>
    );
  }
  return (
    items.map((item) => <Item key={item.id} {...item} onToggle={() => onToggle(item.id)} />)
  );
}

const ItemList = ({items, onToggle}) => (
  <div>
    <div className="item-list">
      {renderItems(items, onToggle)}
    </div>
  </div> 
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.number,
      completedAt: PropTypes.number
    }).isRequired
  ).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default ItemList;