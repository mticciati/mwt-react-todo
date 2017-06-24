import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id, checked, text} = this.props
    return (
      <li className="item" onClick={() => this.props.onToggle(id)}>
        <label>
          <input 
            type="checkbox"
            ref="completed"
            checked={checked}
          />
          {text}
        </label>
      </li>
    );
  }
}

Item.propTypes = {
  checked: PropTypes.boolean,
  text: PropTypes.string,
  onToggle: PropTypes.func.isRequired
}
Item.defaultProps = {
  checked: false,
  text: ''
}