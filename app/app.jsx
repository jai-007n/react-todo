var React = require('react');
var ReactDOM = require('react-dom');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');
var TodoApp=require('TodoApp');
var {Provider}=require('react-redux');

var actions=require('actions');
var store=require('configureStore').configure();

store.subscribe(()=>{
  console.log('New State ',store.getState());
  });

// store.dispatch(actions.addTodo('clean the street'));
// store.dispatch(actions.setSearchText('street'));
// store.dispatch(actions.toggleShowCompleted());




// require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
<Provider store={store}>
<TodoApp></TodoApp>

</Provider>
  , document.getElementById('app'));
