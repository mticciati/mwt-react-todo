import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id, completed, text} = this.props
    return (
      <li className="item" onClick={() => this.props.onToggle(id)}>
        <label>
          <input 
            type="checkbox"
            ref="completed"
            defaultChecked={completed}
          />
          {text}
        </label>
      </li>
    );
  }
}

Item.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  onToggle: PropTypes.func.isRequired
}
Item.defaultProps = {
  completed: false,
  text: ''
}