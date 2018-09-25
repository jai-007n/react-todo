var redux=require('redux');

var {searchTextReducer,todosReducers,showCompletedReducer}=require('reducers');

export var  configure=()=>{
  var reducer=redux.combineReducers({
    searchText:searchTextReducer,
    todos:todosReducers,
    showCompleted:showCompletedReducer

  });

  var store=redux.createStore(reducer,redux.compose(
    window.devtoolsExtension ? window.devtoolsExtension(): f=>f
   ));

   return store;
};
