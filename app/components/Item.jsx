import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id, completed, text, createdAt, completedAt} = this.props;
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      } 
      return message + moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A');
    }
    return (
      <div className="item" onClick={() => this.props.onToggle(id)}>
        <label>
          <input 
            type="checkbox"
            ref="completed"
            defaultChecked={completed}
          />
          {text} <br/>
          {renderDate()}
        </label>
      </div>
    );
  }
}

Item.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  createdAt: PropTypes.number,
  onToggle: PropTypes.func.isRequired
}
Item.defaultProps = {
  completed: false,
  text: ''
}