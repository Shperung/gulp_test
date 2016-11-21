var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task("mytask", function(){
	console.log("mytask");
});
/*
gulp.task("mytask2", function(){
	return gulp.src('source-files').
	    pipe(plugin()).
	    pipe(gulp.dest('folder'));

});
*/

gulp.task('less', function () {
  return gulp.src('app/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'));
});