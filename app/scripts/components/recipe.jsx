var React = require('react');
var NavBarComponent = require('./main.jsx').NavBarComponent;

var RecipeForm = React.createClass({

  render: function(){
    return (
      <div>
        <NavBarComponent />
        <form className="col-md-6" onSubmit={this.handleSubmit}>
          <h2>New Recipe</h2>
            <div className = "form-group">
              <label htmlFor = "title">Title</label>
              <input onChange={this.handleNameChange} name="title" type = "text" className = "form-control" id = "title"
                placeholder = "Cake Name"/>
              <label htmlFor = "quantity">Quantity</label>
              <input onChange={this.handleQuanChange} name="title" type = "text" className = "form-control" id = "title"
                placeholder = "Quantity"/>
              <label htmlFor = "ingredients">Ingredients</label>
              <input onChange={this.handleIngChange} name="title" type = "text" className = "form-control" id = "title"
                placeholder = "List Ingredient"/><button className="btn btn-sm add-ingredient">Add</button>
            </div>
            <button className="btn btn-sm btn-block submit" type="submit">Add Recipe</button>
        </form>

      </div>
    );
  }
});

var RecipeList = React.createClass({
  render: function(){
    return (
      <div>
        <NavBarComponent />
        <h1>My List of Recipes here</h1>


      </div>
    )
  }
});

module.exports = {
  'RecipeList' : RecipeList,
  'RecipeForm' : RecipeForm
}
