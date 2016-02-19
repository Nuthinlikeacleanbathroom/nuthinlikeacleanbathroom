module.exports = function(app) {
  app.route('/')
  .get(function(req, res, next) {
    res.json('Hello World');
  });
}
