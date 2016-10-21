var Promise = require('es6-promise').Promise; // Required to avoid the Promise error on some plugins like gulp-cssnano
var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

// var useref = require('gulp-useref');

// Command: gulp default or gulp
gulp.task('default', function(){
	console.log("Test");
});

// Command: gulp hello
gulp.task('hello', function(){
	console.log("Hello World!");
});

// Command: gulp useref
gulp.task('useref', function(){
	return gulp.src('index.html') // .src is the function that is very similar to locating or searching on that file or folder
	.pipe(useref())
	// Minifies only if it's a Javascript file
	.pipe(gulpIf('*.js', uglify({ compress: { drop_console: true } }))) // options is used to remove the console.logs
	// Minifies only if it's a CSS file
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('')) // .dest is the location where it will produce the output
	// set to '', so it will automatically change everything and there's no need to move files 
});
// Make sure that you have a backup of the index.html befoure you run this

// Command: gulp images
gulp.task('images', function(){
	return gulp.src('images/**/*.+(png|jpg|gif|svg)')
	.pipe(imagemin()) // Minifies images
	.pipe(gulp.dest('gulp-outputs/images'))
});