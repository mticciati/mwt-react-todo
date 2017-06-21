import React from 'react';
import expect, {createSpy, isSpy, spyOn} from 'expect';
import ItemList, {Item} from 'ItemList';

describe('ItemList', () =>{

  it('ItemList should exist', () => {
    expect(ItemList).toExist();
  }); 

  it('Item should exist', () => {
    expect(Item).toExist();
  });

});