var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo on clicking add todo',()=>{
    var todoText='todo text';
    var todoApp=TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle  value',()=>{
var todoData={
  id:11,
  text:'Eat',
  completed:false,
  createdAt:0,
  completedAt:undefined
}

  var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
todoApp.setState({todos: [todoData]});
expect(todoApp.state.todos[0].completed).toBe(false);
todoApp.handleToggle(11);
expect(todoApp.state.todos[0].completed).toBe(true);
expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle  value from completed to created',()=>{
var todoData={
  id:11,
  text:'Eat',
  completed:true,
  createdAt:0,
  completedAt:123
}

  var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
todoApp.setState({todos: [todoData]});
expect(todoApp.state.todos[0].completed).toBe(true);
todoApp.handleToggle(11);
expect(todoApp.state.todos[0].completed).toBe(false);
expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
