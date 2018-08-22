var React=require('react');

var TodoSearch =React.createClass({

handleSearch:function()
{
var showCompletetd=this.refs.showCompletetd.checked;
var searchText=this.refs.searchText.value;
this.props.onSearch(showCompletetd,searchText);
},

render:function(){
  return(
<div className='container__header'>
<div>
<input type="search" ref="searchText" placeholder="Search Compleetd Todos" onChange={this.handleSearch}></input>
</div>
<div>
<label><input type="checkbox" ref="showCompletetd" onChange={this.handleSearch}></input> Show Completed Todos</label>
</div>
</div>

  );
}

});


module.exports=TodoSearch;
