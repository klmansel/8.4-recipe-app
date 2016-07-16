var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
require('backbone-react-component');
var RecipeCollection = require('../models/recipe.js').RecipeCollection;
var User = require('../models/user.js').User;
var $ = require('jquery');

var NavBarComponentNoLogin = React.createClass({
  render: function(){
    return (
      <div className="full-navbar">
        <nav>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Bake Me a Cake! <i className="fa fa-birthday-cake" aria-hidden="true"></i></a>
            </div>
          </div>
        </nav>
      </div>
);
  }
});
var NavBarComponent = React.createClass({
  render: function(){
    return (
      <div className="full-navbar">
        <nav>
          <div className="container-fluid">

        <div className="navbar-header">
          <a className="navbar-brand" href="#"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Bake Me a Cake! <i className="fa fa-birthday-cake" aria-hidden="true"></i></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a className="navlinks" href="#newrecipe">New Recipe <span className="sr-only">(current)</span></a></li>
            <li><a className="navlinks" href="#myrecipes">My Recipes</a></li>
          </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
});

var SignupComponent = React.createClass({
  getInitialState: function(){
    return {'name': '', 'email': '', 'password': ''
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    var signup = new User();
    var router = this.props.router;

    signup.set('name', this.state.name );
    signup.set('username', this.state.email );
    signup.set('password', this.state.password );
    signup.save().done(function(){
      alert('Saved the form');
      router.navigate('myrecipes', {trigger: true});
    });
  },
  handleNameChange: function(e){
    this.setState({'name': e.target.value})
  },
  handleEmailChange: function(e){
    this.setState({'email': e.target.value})
  },
  handlePasswordChange: function(e){
    this.setState({'password': e.target.value})
  },

  render: function(){
    return (
      <div className="col-md-4">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h2 className="form-signup-heading">Sign up</h2>
          <div className = "form-group">
              <input onChange={this.handleNameChange} name="name" type = "text" className = "form-control" id = "name" placeholder = "Enter Name"/>
              <input onChange={this.handleEmailChange} name="email" type="email" className="form-control" id="email" placeholder="Enter email"/>
              <small className="text-muted">Your email is safe with us!</small>
              <fieldset className="form-group">
              <input onChange={this.handlePasswordChange}  name="password" type="password" className="form-control" id="password" placeholder="Create a Password"/>
            </fieldset>
          </div>
          <button className="btn btn-lg btn-primary btn-block signup" type="submit">Sign up Now</button>
        </form>
      </div>
    )
  }
});

var SignInComponent = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var username = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    var router = this.props.router;
    console.log(this.props);
    User.login(username, password, {
      success: function(user){
        console.log('User logged in!: ', user);
        router.navigate('myrecipes', {trigger: true})
      },
      error: function(user, error){
        console.log('error: ', error);
      }
    });
  },

  render: function(){
    return (
      <div className="col-md-4 col-md-offset-2">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <h2 className="form-signin-heading">Sign In</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input onChange={this.handleEmailChange} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input onChange={this.handlePasswordChange}name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block submit" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
});

var AppComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <NavBarComponent />
        <div className="forms">
          <div col-md-4>
            <SignInComponent router={this.props.router}/>
          </div>
          <div col-md-4>
            <SignupComponent router={this.props.router}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  'NavBarComponent' : NavBarComponent,
  'SignupComponent' : SignupComponent,
  'SignInComponent' : SignInComponent,
  'AppComponent' : AppComponent,
  'NavBarComponentNoLogin' : NavBarComponentNoLogin
};
