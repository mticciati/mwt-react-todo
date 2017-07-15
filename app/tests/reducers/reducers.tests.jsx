import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';

import * as reducers from '../../reducers/reducers';


describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should generate search text', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Car'
    };
    let res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

    expect(res).toEqual(action.searchText);
  });

  });

  describe('showCompletedReducer', () => {

    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

      expect(res).toBe(true);
    });

  });

  describe('todosReducer', () => {

    it ('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'hello',
          completed: false,
          createdAt: 123
        }
      };
      let res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo completed', () => {
      let todos = [
        {
          id: 1,
          text: 'Bow to the cat',
          completed: true,
          createdAt: 123,
          completedAt: 144
        }
      ];
      let updates = {
        completed: false,
        completedAt: null
      };
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      let res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      let todos = [
        {
          id: 1,
          text: 'Bow to the cat',
          completed: true,
          createdAt: 123,
          completedAt: 144
        }
      ];
      let action = {
        type: 'ADD_TODOS',
        todos
      };
      let res = reducers.todosReducer([], deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });

  });
  

});