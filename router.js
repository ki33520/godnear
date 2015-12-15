
exports.handle = function(app) {
  app.get('/', exports.index, exceptionHandler);
};
exports.index = function(req, res){
  res.render('blog/public/404.html');
}
exports.handleNotFound = function(req, res) {
  res.status(404);
  res.render('blog/public/404.html');
};

exports.handleError = function(err, req, res, next) {
  res.status(500);
  res.render('blog/public/500.html');
};

var exceptionHandler = function() {
  return {
    handleNotFound: exports.handleNotFound,
    handleError: exports.handleError
  };
}