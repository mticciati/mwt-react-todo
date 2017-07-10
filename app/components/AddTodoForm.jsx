import React from 'react';

const AddTodoForm = ({onAddTodo}) => {
  let input;
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!input.value.trim()) {
      input.focus();
      return;
    }
    onAddTodo(input.value);
    input.value = '';
  }
  return (
    <div className="container__footer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={node => {input = node}} placeholder="What do you need to do?" />
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm