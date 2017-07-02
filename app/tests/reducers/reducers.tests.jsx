import expect from 'expect';

import * as reducers from '../../reducers/reducers';


describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should generate search text', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Car'
    };
    let res = reducers.searchTextReducer('', action);

    expect(res).toEqual(action.searchText);
  });

  });

  describe('showCompletedReducer', () => {

    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(false, action);

      expect(res).toBe(true);
    });

  });
  

});