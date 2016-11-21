var gulp = require('gulp');
var less = require('gulp-less');
var browser_sinc = require('browser-sync');
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
  return gulp.src('app/less/**/*.less')//все файлы с директории и подддиректорий
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browser_sinc.reload({stream: true}));//ingecting css
});




/*browser_sinc*/
gulp.task('browser_sinc', function(){
	browser_sinc({
		server:{
			baseDir: 'app'
		},
		notify: false	
	});
	
});




/*watch*/
gulp.task("watch", ['browser_sinc', 'less'] , function(){
	gulp.watch('app/less/**/*.less', ['less']);
});