handleSignup: function(e){
e.preventDefault();
var email = $('#email').val();
var name = $('#name').val();
var password = $('#password').val();
Parse.User.logIn(email,name, password, {
  success: function(user) {
    console.log(user);
    console.log("Hello ",  user);
    Backbone.history.navigate("recipeList", {trigger: true});
  },

  <ul className="nav navbar-nav navbar-right">
           <li><a href="#">Link</a></li>
           <li className="dropdown">
             <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                 <ul className="dropdown-menu">
                   <li><a href="#">Action</a></li>
                   <li><a href="#">Another action</a></li>
                   <li><a href="#">Something else here</a></li>
                   <li role="separator" className="divider"></li>
                   <li><a href="#">Separated link</a></li>
                 </ul>
               </li>
             </ul>
