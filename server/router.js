var express = require('express');
var fundsController = require('./Funds/FundsController');
var iposController = require('./IPOs/IPOsController');
var util = require('./util');
module.exports = function(app, passport) {
    app.route('/')
    .get(util.checkUser, function(req, res) {
      res.render('index');
    });
  
  app.route('/login')
    .get(function(req,res){
      res.render('login'); 
    })
    .post(passport.authenticate( 'login', {
      successRedirect : '/',
      failureRedirect : '/signup',
    }));
  app.route('/signup')
    .get(function(req, res){
      res.render('signup');
    })
    .post(function(req,res){
      res.render('index');
    });
    // TODO: fix for proper auth
    // .post( passport.authenticate( 'signup', {
    //  successRedirect : '/',
    //  failureRedirect : '/signup',
    // }));
  // TODO: fix for proper auth
  app.route('/funds')
    .get(fundsController.get);
  app.route('/ipos')
    .get(iposController.get);
};