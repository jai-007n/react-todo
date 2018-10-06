var redux=require('redux');

var {searchTextReducer,todosReducer,showCompletedReducer}=require('reducers');

export var  configure=(initialState={})=>{
  var reducer=redux.combineReducers({
    searchText:searchTextReducer,
    todos:todosReducer,
    showCompleted:showCompletedReducer

  });

  var store=redux.createStore(reducer,initialState,redux.compose(
    window.devtoolsExtension ? window.devtoolsExtension(): f=>f
   ));

   return store;
};
