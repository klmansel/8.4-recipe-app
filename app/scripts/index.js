var IngredientCollection = require('./models/recipe').IngredientCollection;
var React = require('react');
var ReactDOM = require('react-dom');
var SignupComponent = require('./components/main.jsx').SignupComponent;
var Backbone = require('backbone');
require('./router.js');

// var recipe = new IngredientCollection();
// console.log(recipe);
// //IngredientCollection working
//
// ReactDOM.render(
//   React.createElement(NavBarComponent),
//   document.getElementById('container')
// );
//
// ReactDOM.render(
//   React.createElement(SignupComponent),
//   document.getElementById('container2')
// );
Backbone.history.start()
