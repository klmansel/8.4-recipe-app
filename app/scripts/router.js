var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var NavBarComponent = require('./components/main.jsx').NavBarComponent;
var SignupComponent = require('./components/main.jsx').SignupComponent;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'myrecipe/': 'myRecipes',
    'newrecipe/' : 'newRecipe',
    'signup/':'signup'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(NavBarComponent),
      document.getElementById('container')
    );
  },
  signup: function(){
    ReactDOM.render(
      React.createElement(SignupComponent),
      document.getElementById('container2')
    );
  },
  signin: function(){
    ReactDOM.render(
      React.createElement(SignInComponent),
      document.getElementById('container2')
    );
  }
});

var router = new Router();

module.exports = router;
