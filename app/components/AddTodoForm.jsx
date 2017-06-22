import React from 'react';

export default class AddTodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    var text = this.refs.text.value;
    if (text !== '') {
      this.refs.text.value = '';
      this.props.onAddTodo(text);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="text" placeholder="What do you need to do?" />
        <button className="button expanded">Add Todo</button>
      </form>
    );
  }
}