import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/actions';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'hello',
        completed: false,
        createdAt: 123
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Bow to the cat';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate todos action object', () => {
    let todos = [
      {
        id: 111,
        text: 'hello',
        completed: false,
        completedAt: undefined,
        createdAt: 123
      }
    ];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 12,
      updates: {
        completed: false
      }
    };
    let res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate clear todo action', () => {
    let action = {
      type: 'CLEAR_TODOS'
    };
    let res = actions.clearTodos();

    expect(res).toEqual(action);
  });

});