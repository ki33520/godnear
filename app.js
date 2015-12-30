var http = require('http');
var express = require('express');
var favicon = require('serve-favicon');
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var blogConfig = require('./config').blogConfig;
var dbConfig = require('./config').dbConfig;
var route = require('./server/router');

var app = express();

var staticDir = __dirname + '/public/';
var viewsDir = __dirname + '/views/';
var faviconPath = staticDir + 'images/h.ico';

app.set('port', blogConfig.port);
app.set('views', viewsDir);

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

/**
 * midware
 */

// static assets
app.use(express.static(staticDir));
// partials
app.use(partials());
// favicon
app.use(favicon(faviconPath));
// bodyParser
app.use(bodyParser());
// cookieParser
//app.use(cookieParser());
// session
app.use(session({
	secret: blogConfig.sessionSecret,
	// 1 Hour
	cookie: { maxAge: blogConfig.cookieMaxAge },
	store: new MongoStore({
		url: dbConfig.development.dbUrl
	})
}));

route.handle(app);


//console.log(express)
// 开发环境
// if (app.get('env') === 'development') {
// 	 app.use(express.errorHandler({
// 		 dumpExceptions: true,
// 		 showStack: true
// 	 }));
// }

// 生产环境
if (app.get('env') === 'production') {
	// 404
	app.use(function handleNotFound(req, res) {
		route.handleNotFound(req, res);
	});

	// 500
	app.use(function handlerError(err, req, res, next) {
		route.handleNotFound(err, req, res, next);
	});

	// 视图缓存
	app.set('view cache', true);
}

// 启动服务
http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});