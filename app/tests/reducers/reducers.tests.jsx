import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';

import * as reducers from '../../reducers/reducers';


describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should generate search text', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Car'
    };
    const res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

    expect(res).toEqual(action.searchText);
  });

  });

  describe('showCompletedReducer', () => {

    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

      expect(res).toBe(true);
    });

  });

  describe('todosReducer', () => {

    it ('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'hello',
          completed: false,
          createdAt: 123
        }
      };
      const res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

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
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      const res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

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
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const res = reducers.todosReducer([], deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });

  });


  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: '123abc'
      }

      const res = reducers.authReducer(undefined, deepFreeze(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should wipe auth on LOGOUT', () => {
      const authData = {
        uid: '123abc'
      }
      const action = {
        type: 'LOGOUT'
      }

      const res = reducers.authReducer(deepFreeze(authData), deepFreeze(action));

      expect(res).toEqual({});
    });
  });
  

});