var express = require('express');
var fundsController = require('./Funds/FundsController');
var iposController = require('./IPOs/IPOsController');
var util = require('./util');
module.exports = function(app, passport) {
    app.route('/')
    .get(function(req, res) {
      res.render('index');
    });
  
  app.route('/login')
    .get( function(req,res){
      res.render('login'); 
    })
    // .post( function(req,res){
    //  res.render('index');
    // });
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
    })
    // .post( passport.authenticate( 'signup', {
    //  successRedirect : '/',
    //  failureRedirect : '/signup',
    // }));
  app.route('/funds')
    .get(fundsController.get);
  app.route('/ipos')
    .get(iposController.get);
};