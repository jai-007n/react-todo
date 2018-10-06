var React=require('react');

//var TodoList=require('TodoList');
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
// var AddTodo=require('AddTodo');
import TodoSearch from 'TodoSearch'
// var TodoSearch=require('TodoSearch');
var uuid=require('node-uuid');
var TodoAPI=require('TodoAPI');
var moment=require('moment');


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
componentDidUpdate:function(){
  TodoAPI.setTodos(this.state.todos);
},


handleAddTodo:function(text)
{
  this.setState({
    todos:[...this.state.todos,
    {
      id:uuid(),
      text:text,
      completed:false,
      createdAt:moment().unix(),
      completedAt: undefined
    }]
  });
},
  render:function()
  {
    var {todos,showCompletetd,searchText}=this.state;
    var filteredTodos=TodoAPI.filterTodos(todos,showCompletetd,searchText);

    return(
      <div className='body-todo'>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
        <div className='column small-centered small-11 medium-6 large-5'>
          <div className='container'>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList />
          <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>

      </div>

    )
  }
});

module.exports=TodoApp;
