import React from 'react';

export function Item(props) {
  return (
    <li className="item">{props.text}</li>
  );
}

function ItemList(items) {
  return (
    <div>
      <ul className="item-list">
        {items.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
}

export default ItemList;