var React=require('react');
var TodoList=require('TodoList');
var AddTodo=require('AddTodo');

var TodoApp=React.createClass({
getInitialState:function(){
  return {
    todos:[
      {
        id:1,
        text:'walk the dog'
      },
      {
        id:2,
        text:'clean the yard'
      },
      {
        id:3,
        text:'500 push ups'
      },
      {
        id:4,
        text:'complete react course'
      }
    ]
  }
},
handleAddTodo:function(text)
{
  alert('new todos: ' + text);
},
  render:function()
  {
    var {todos}=this.state;
    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>

    )
  }
});

module.exports=TodoApp;
