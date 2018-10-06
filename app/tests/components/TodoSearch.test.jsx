var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch'
// var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

it('should dispatch set search text on input change',()=>{
var searchText='Dog';
var action={
  type:'SET_SEARCH_TEXT',
  searchText
};
var spy=expect.createSpy();

var todoSearch=TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

todoSearch.refs.searchText.value=searchText;
TestUtils.Simulate.change(todoSearch.refs.searchText);

expect(spy).toHaveBeenCalledWith(action);

});

it('should dispatch toggleShowCompleted when checked box checked',()=>{
var action={
type:'TOGGLE_SHOW_COMPLETED'
};
  var spy=expect.createSpy();

  var todoSearch=TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

  todoSearch.refs.showCompletetd.checked=true;
  TestUtils.Simulate.change(todoSearch.refs.showCompletetd);

  expect(spy).toHaveBeenCalledWith(action);
});
});
