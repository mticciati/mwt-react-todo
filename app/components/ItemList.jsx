import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Item from 'Item';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items} = this.props;
    return (
      <div>
        <div className="item-list">
          {items.map((item) => <Item key={item.id} {...item} onToggle={this.props.onToggle} />)}
        </div>
      </div>
    );
  }
  
}

ItemList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func.isRequired
}