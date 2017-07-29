import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    let todos = [
      {
        id: 121,
        text: 'test',
        completed: true
      },
      {
        id: 122,
        text: 'other text',
        completed: false
      },
      {
        id: 123,
        text: 'test 3',
        completed: true
      },
      ];
    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return items with completed false when showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return non-completed items first', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos when searchText is empty',() => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return todos with text that includes searchText', () => {
      let searchText = 'test';
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'test');

      expect(filteredTodos.length).toBe(2);
    });

    it('should return todos with text that includes uppercase searchText', () => {
      let searchText = 'Test';
      let filteredTodos = TodoAPI.filterTodos(todos, true, searchText);

      expect(filteredTodos.length).toBe(2);
    });

  });

  describe('clearTodos', () =>{

    it('should clear todos from localStorage', () => {
      let todos = [{
        id: 121,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      let res = TodoAPI.clearTodos();
      console.log(localStorage.getItem('todos'));

      expect(res).toEqual(true);
      expect(localStorage.getItem('todos')).toEqual(null);
    });

  });

});