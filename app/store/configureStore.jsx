import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    auth: reducers.authReducer,
    fetching: reducers.fetchingReducer,
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  //can also be comineReducers(reducers);

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}