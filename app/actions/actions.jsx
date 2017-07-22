import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo 
  }
}

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    const todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  }
}

export const fetching = () => {
  return {
    type: 'FETCHING'
  }
}

export const doneFetching = () => {
  return {
    type: 'DONE_FETCHING'
  }
}

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const startAddTodos = () => {
  return (dispatch, getState) => {
    dispatch(fetching());  
    return firebaseRef.child('todos')
      .once('value')
      .then((snapshot) => {
        let todos = snapshot.val() || {};
        let parsedTodos = [];
        Object.keys(todos).forEach((todoId) => {
          parsedTodos.push({
            id: todoId,
            ...todos[todoId]
          })
        });
        dispatch(addTodos(parsedTodos));
        dispatch(doneFetching());
      });
  }
}

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed, 
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
}

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked', result);
      dispatch(login(result.user.uid));
    }, (e) => {
      console.log('Unable to auth', e);
    });
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out');
      dispatch(logout());
    }, (e) => {
      console.log('Unable to log out');
    }); 
  }
}