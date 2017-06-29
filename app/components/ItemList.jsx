import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Item from 'Item';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items} = this.props;
    const renderItems = () => {
      if (items.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return (
        items.map((item) => <Item key={item.id} {...item} onToggle={this.props.onToggle} />)
      );
    }
    return (
      <div>
        <div className="item-list">
          {renderItems()}
        </div>
      </div>
    );
  }
  
}

ItemList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func.isRequired
}