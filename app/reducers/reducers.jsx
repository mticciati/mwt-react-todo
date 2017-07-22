import moment from 'moment';

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default: 
      return state
  }
}

export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state
  }
}

export const showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'FETCHING_TODOS':
      return {
        isFetching: true
      }
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'CLEAR_TODOS': 
      return [];
    case 'UPDATE_TODO': 
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      })
    default:
      return state;
  }
}

export const fetchingReducer = (state = {fetching: false}, action) => {
  switch(action.type) {
    case 'FETCHING':
      return true;
    case 'DONE_FETCHING':
      return false;
    default:
      return state;
  }
}