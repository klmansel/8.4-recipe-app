var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery'); //get backbone models into app
var Recipe = require('./models/recipe').Recipe
var RecipeCollection = require('./models/recipe').RecipeCollection;
var NavBarComponent = require('./components/main.jsx').NavBarComponent;
var AppComponent = require('./components/main.jsx').AppComponent;
var RecipeForm = require('./components/recipe.jsx').RecipeForm;
var RecipeList = require('./components/recipe.jsx').RecipeList;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'myrecipes': 'myrecipes',
    'newrecipe' : 'newrecipe',
    'signup' : 'signup',
    'signin' : 'signin'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppComponent, {router:this}),
      document.getElementById('container2')
    );
  },
  newrecipe: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeForm, {router:self}),
      document.getElementById('container2')
    );
  },
  myrecipes: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeList, {router:self}),
      document.getElementById('container2')
    );
  }

});

var router = new Router();

module.exports = router;
