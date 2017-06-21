import React from 'react';

export function Item(props) {
  return (
    <li>{props.text}</li>
  );
}

function ItemList(items) {
  return (
    <div>
      <ul>
        {items.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
}

export default ItemList;