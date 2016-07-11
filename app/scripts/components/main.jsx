var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
require('backbone-react-component');
//setstate of container
var NavBarComponent = React.createClass({
  showSignup: function(){
    <SignupComponent></SignupComponent>
  },
  render: function(){
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Bake Me a Cake! <i className="fa fa-birthday-cake" aria-hidden="true"></i></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">New Recipe <span className="sr-only">(current)</span></a></li>
            <li><a href="#">My Recipes</a></li>
          </ul>
          <form className="navbar-form navbar-left" role="signin">

            <button onClick={this.showSignup} type="submit" className="btn btn-default">Sign Up</button>
            <button type="submit" className="btn btn-default">Login</button>
          </form>

            </div>
          </div>
        </nav>
      </div>

    );
  }
});

var SignupComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-4">
        <h2 className="form-signup-heading">Sign up Here</h2>
        <form>
          <div className = "form-group">
            <label htmlFor = "name">Name</label>
            <input type = "text" className = "form-control" id = "name" placeholder = "Enter Name"/>
          </div>
          <fieldset className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email"/>
            <small className="text-muted">Your email is safe with us!</small>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a Password"/>
          </fieldset>
          <button onClick="handleSignup" className="btn btn-lg btn-primary btn-block signup" type="submit">Sign up Now</button>
        </form>
      </div>
    )
  }
});

var SignInComponent = React.createClass({
  render: function(){
    return (
      <form className="col-md-3 col-md-offset-3 form-signin">
        <h2 className="form-signin-heading">Please Sign In</h2>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block submit" type="submit">Sign In</button>
      </form>
    );
  }
});

module.exports = {
  'NavBarComponent' : NavBarComponent,
  'SignupComponent' : SignupComponent,
  'SignInComponent' : SignInComponent
};
