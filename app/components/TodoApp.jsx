var React=require('react');
var TodoList=require('TodoList');
var AddTodo=require('AddTodo');
var TodoSearch=require('TodoSearch');
var uuid=require('node-uuid');
var TodoAPI=require('TodoAPI');

var TodoApp=React.createClass({
getInitialState:function(){
  return {
    showCompletetd:false,
    searchText:'',
    todos:TodoAPI.getTodos()
  };
},
handleSearch:function(showCompletetd,searchText)
{
  this.setState({
    showCompletetd:showCompletetd,
    searchText:searchText.toLowerCase()
  });
},
ComponentDidUpdate:function(){
  TodoAPI.setTodos(this.state.todos);
},
handleToggle:function(id){
  var updatedTodos=this.state.todos.map((todo)=>{
    if(todo.id === id)
    {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  this.setState({todos:updatedTodos});
},

handleAddTodo:function(text)
{
  this.setState({
    todos:[...this.state.todos,
    {
      id:uuid(),
      text:text,
      completed:false
    }]
  });
},
  render:function()
  {
    var {todos}=this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>

    )
  }
});

module.exports=TodoApp;
