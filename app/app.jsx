var React = require('react');
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');
var TodoApp=require('TodoApp');
var {Provider}=require('react-redux');

var actions=require('actions');
var store=require('configureStore').configure();
var TodoAPI=require('TodoAPI');

store.subscribe(()=>{
  var state=store.getState();
  console.log('New State ',store.getState());
  TodoAPI.setTodos(state.todos);
  });

  var initialTodos=TodoAPI.getTodos();
  store.dispatch(actions.addTodos(initialTodos));

require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
<Provider store={store}>
<TodoApp></TodoApp>

</Provider>
  , document.getElementById('app'));
