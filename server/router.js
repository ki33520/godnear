'use strict';

exports.handle = function(app) {
	app.get('/', require('./controller/index').index, exceptionHandler);
	app.get('/index', require('./controller/index').index, exceptionHandler);
	app.get('/users', require('./controller/users').login, exceptionHandler);
};

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