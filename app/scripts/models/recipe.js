var Backbone= require('backbone');
var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');



var Recipe = Backbone.Model.extend({
idAttribute: 'objectId',
urlRoot: 'https://tiny-parse-server.herokuapp.com/classes/KMCakes',
url: function(){
  return this.urlRoot + this.get('objectId') + '/';
}
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://tiny-parse-server.herokuapp.com/classes/KMCakes',
  parse: function(serverResponse){
   return serverResponse.results;
 }
});

module.exports = {
  'Recipe' : Recipe,
  'RecipeCollection' : RecipeCollection
};
