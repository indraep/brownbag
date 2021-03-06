var gulp = require('gulp'), 
	browserify = require('browserify'),
	babelify = require('babelify'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	package = require('./package.json');


gulp.task('js', function() {
	return browserify(package.paths.appjsx)
	.transform(babelify, {presets: ['react']})
	.bundle()
	.pipe(source(package.dest.app))
	.pipe(gulp.dest(package.dest.dist));
});
gulp.task('js:min', function() {
	return browserify(package.paths.appjsx)
	.transform(babelify, {presets: ['react']})
	.bundle()
	.pipe(source(package.dest.app))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(package.dest.dist));
});

gulp.task('sass', function() {
	gulp.src(package.paths.appsass)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(package.dest.appsass))
        .pipe(gulp.dest(package.dest.distsass));
});

gulp.task('watch', ['js'], function() {
	return gulp.watch(package.paths.jsx, function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['js', 'sass'], function() {});