var expect=require('expect');
var actions=require('actions');

describe('Actions',()=>{

it('should return set serach text',()=>{
var action={
  type:'SET_SEARCH_TEXT',
searchtext:'Some text search'
};
var res=actions.setSearchText(action.searchtext);

  expect(res).toEqual(action);
});



it('should add todo',()=>{
var action={
  type:'ADD_TODO',
text:'Some things to do'
};
var res=actions.addTodo(action.text);

  expect(res).toEqual(action);
});

it('should generate toggle functions',()=>{
var action={
  type:'TOGGLE_SHOW_COMPLETED',
};
var res=actions.toggleShowCompleted();

  expect(res).toEqual(action);
});

it('should toggle todo with id',()=>{
var action={
  type:'TOGGLE_TODO',
  id:123
};
var res=actions.toggleTodo(action.id);

  expect(res).toEqual(action);
});

});
