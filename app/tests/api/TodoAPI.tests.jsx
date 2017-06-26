import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it('should set valid todos array', () => {
      let todos = [{
        id: 121,
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should NOT set invalid todos array', () => {
      let invalidTodos = { a: 'invalid todos!'};
      TodoAPI.setTodos(invalidTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {

    it('should return empty array for invalid localStorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return data for valid localStorage data', () => {
      let todos = [{
        id: 121,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

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

  });

});