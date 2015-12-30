var gulp = require('gulp'),
	nodemon = require('nodemon'),
	jshint = require('gulp-jshint'),
	path = require('path');

gulp.task('lint', function(changedFiles){
	console.log(changedFiles)
	gulp.src('./**/*.js').pipe(jshint());
});

gulp.task('development', function (){
	nodemon({
		delay: '200ms',
		script: 'app.js',
		watch: './',
		verbose: true,
		ext: 'js html json es6 jsx',
		env: {
		    'NODE_ENV': 'development'
		},
		tasks: ['lint']
	}).on('restart', function () {
		console.log('restarted!');
	});
});
gulp.task('production',function(){
	nodemon({
		delay: '200ms',
		script: 'app.js',
		watch: './',
		verbose: true,
		ext: 'js html json es6 jsx',
		env: {
			'NODE_ENV': 'production'
		},
		tasks: ['lint']
	}).on('restart', function () {
		console.log('restarted!');
	});
});