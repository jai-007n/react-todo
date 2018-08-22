var expect=require('expect');

var TodoAPI=require('TodoAPI');


describe('TodoAPI',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

it('should exist',()=>{
  expect(TodoAPI).toExist();
});

describe('setTodos',()=>{
  it('should set valid todos array',()=>{
    var todos=[{
      id:11,
      text:'test',
      completed:false
    }];
    TodoAPI.setTodos(todos);
    var actualTodos=JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
  });

    it('should not set invalid todos array',()=>{
      var badTodos={a:'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
  });
});

describe('getTodos',()=>{

  it('should return empty array on bad data',()=>{
    var actualTodos=TodoAPI.getTodos();

    expect(actualTodos).toEqual([]);
    });

  it('shouldreturn todo on valid storage data',()=>{
    var todos=[{
      id:23,
      text:'test',
      completed:false
    }];
  localStorage.setItem('todos',JSON.stringify(todos));
  var actualTodos=TodoAPI.getTodos();

  expect(actualTodos).toEqual(todos);
});
});

describe('filterTodos',()=>{
  var todos=[{
    id:1,
    text:' other text',
    completed:true
  },
{ id:2,
  text:'sleep',
  completed:false },
{ id:3,
  text:'some text here',
  completed:true }];
it('should return all show completed todos',()=>{
var filteredTodos=TodoAPI.filterTodos(todos,true,'');
expect(filteredTodos.length).toBe(3);

});
it('should return non-completed todos',()=>{
var filteredTodos=TodoAPI.filterTodos(todos,false,'');
expect(filteredTodos.length).toBe(1);

});

it('should sort completed todos',()=>{
var filteredTodos=TodoAPI.filterTodos(todos,true,'');
expect(filteredTodos[0].completed).toBe(false);

});

it('should filter todos by search text',()=>{
var filteredTodos=TodoAPI.filterTodos(todos,true,'some');
expect(filteredTodos.length).toBe(1);

});

it('should return todos by search text',()=>{
var filteredTodos=TodoAPI.filterTodos(todos,true,'');
expect(filteredTodos.length).toBe(3);

});

});

});
