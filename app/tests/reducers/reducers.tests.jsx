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
        text: 'Bow to the cat',
      };
      let res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completed', () => {
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
        type: 'TOGGLE_TODO',
        id: 1
      };
      let res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
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