import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase/';

import * as actions from '../../actions/actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'hello',
        completed: false,
        createdAt: 123
      }
    };
    const res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
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
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: 12,
      updates: {
        completed: false
      }
    };
    const res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate clear todo action', () => {
    const action = {
      type: 'CLEAR_TODOS'
    };
    const res = actions.clearTodos();

    expect(res).toEqual(action);
  });

  it('should generate LOGIN action', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    }

    const res = actions.login(action.uid);
    expect(res).toEqual(action);
  });

  it('should generate LOGOUT action', () => {
    const action = {
      type: 'LOGOUT'
    }

    const res = actions.logout();
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef, uid, todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously()
        .then((user) => {
          uid = user.uid;
          todosRef = firebaseRef.child(`users/${uid}/todos`);

          return todosRef.remove()
        })
        .then(() => {
          testTodoRef = todosRef.push();

          return testTodoRef.set({
            text: 'Test Todo',
            completed: false,
            createdAt: 123
          });
        })
        .then(() => done())
        .catch(done);

    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }).catch(done);
    });

    it('should populate todos dispatch ADD_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then((snapshot) => {
        const mockActions = store.getActions();
        expect(mockActions[1]).toInclude({
          type: 'ADD_TODOS'
        });

        expect(mockActions[1].todos[0].text).toEqual('Test Todo');

        done();
      }).catch(done);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
      const todoText = 'Bow to the cat';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(mockActions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

    it('should clear todos and dispatch CLEAR_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});

      store.dispatch(actions.startClearTodos()).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[1]).toInclude({
          type: 'CLEAR_TODOS'
        });
        console.log(mockActions);
        done();
      }).catch(done);
    });

  });

});