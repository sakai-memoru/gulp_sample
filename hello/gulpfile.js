var gulp = require('gulp');
var rev = require('gulp-rev');
var header = require('gulp-header');
var rename = require('gulp-rename');
require('datejs');
//var delDirectoryFiles = require('gulp-delete-files');
 


gulp.task('hello', function() {
    console.log('Hello World!');
});


gulp.task('tempFile', function() {
	var strToday = (new Date()).toString('yyyyMMddhhmmss');
	console.log(strToday);
	return gulp.src('data/temp.txt')
		.pipe(header('sample\n\n'))
		.pipe(rev())
		.pipe(gulp.dest('backup/'));
});

