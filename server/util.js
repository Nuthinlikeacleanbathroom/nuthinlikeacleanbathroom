module.exports = {
  // loggedIn: function(req, res) {
  //     return req.isAuthenticated();
  // },
  checkUser: function(req, res, next) {
    if(!req.isAuthenticated()){
      res.redirect('/login');
    }else{
      next();
    }
  }
};