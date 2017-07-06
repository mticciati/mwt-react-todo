import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const renderDate = (createdAt, completed, completedAt = undefined) => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      } 
      return message + moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A');
    }

const Item = ({id, completed, text, createdAt, completedAt, onToggle}) => (
  <div 
    className={
      completed ? 'item item-completed' : 'item'
    } 
    onClick={onToggle}
  >
    <div>
      <input 
        type="checkbox"
        // ref="completed"
        defaultChecked={completed}
      />
    </div>
    <div>
      <p>{text}</p>
      <p className="item__subtext">{renderDate(createdAt, completed, completedAt)}</p>
    </div>
  </div>
)

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

export default Item;