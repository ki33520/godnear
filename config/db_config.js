var mongoose = require('mongoose');

// util
var util = require('../libs/util');

var development = {
	host: 'localhost',
	port: 27017,
	name: 'godnear',
	username: '',
	password: ''
};
development.dbUrl = util.generateMongoUrl(development);
exports.development = development;
