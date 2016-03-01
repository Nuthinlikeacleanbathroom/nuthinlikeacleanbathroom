var LocalStrategy = require('passport-local').Strategy;
var User = require('./UsersModel');

module.exports = function(passport) {
  passport.serializeUser( function(user, done) {
    console.log("Passport Serialize");
    done( null, user.id );
  });
  passport.deserializeUser(function(id, done) {
    console.log("Passport DeSerialize");
    User.findById( id, function(err, user) {
      done(err,user);
    });
  });

  // LOGIN
  passport.use('login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done) {
      console.log("Passport Login");
      User.findOne({'local.email': email}, function(err, user) {
        if(err){ 
          return done(err); 
        }
        if(!user){
          return done(null, false, console.log('No user found'));
        }
        if(!user.validPassword(password)){
          return done(null, false, console.log('Wrong password'));
        }
        return done(null, user);
      });
    })
  );
  // SIGNUP
  passport.use('signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done) {
      console.log("Passport Signup");
      User.findOne({'local.email' :  email}, function(err, user) {
        if(err){ 
          return done(err); 
        }
        if(user){
          return done(null, false, console.log('That email is already taken'));
        }else{
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function(err){
            if(err){ 
              throw err; 
            }
            return done(null, newUser);
          });
        }
      });
    })
  );


};