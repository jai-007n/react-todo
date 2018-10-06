var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider}=require('react-redux');
var TodoApp = require('TodoApp');
// var TodoList=require('TodoList');
import TodoList from 'TodoList'
var configureStore=require('configureStore');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todolist', () => {
    var store=configureStore.configure();
    var provider=TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
      );

      var todoApp=TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0]
      var todoList=TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);
      expect(todoList.length).toEqual(1);
  });

});
