import {combineReducers, compose, createStore} from 'redux';
import * as reducers from '../reducers/reducers';

export const configure = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  //can also be comineReducers(reducers);

  let store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}