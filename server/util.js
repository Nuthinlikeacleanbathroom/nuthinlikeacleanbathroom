module.exports= {

  loggedIn: function(req, res) {
      return req.isAuthenticated();
  },

  checkUser: function(req, res, next) {
    if( !loggedIn( req, res, next) ){
      res.redirect('/login');
    }else{
      next();
    }
  }

};