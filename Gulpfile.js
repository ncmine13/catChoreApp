var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var less = require('gulp-less');

gulp.task('react', function(){
return browserify('./client/clientReact/InputComponent.js')
        .transform('babelify', {presets: ["react"]})
        .bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('./server/public/js/build'))
})

gulp.task('compile-less', function(){
	gulp.src('./server/public/styles/styles.less')
	.pipe(less())
	.pipe(gulp.dest('./server/public/styles'))
})

gulp.task('watch', function(){
	gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
	gulp.watch(['./client/clientReact/*.js'], ['react'])
})

gulp.task('default', ['react', 'watch', 'compile-less'])