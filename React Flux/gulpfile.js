var gulp = require('gulp'), 
	debug = require('gulp-debug'),
	eslint = require('gulp-eslint'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	gulpIf = require('gulp-if'),
	package = require('./package.json');

function isFixed(file) {
	// Has ESLint fixed the file contents?
	return file.eslint != null && file.eslint.fixed;
}

gulp.task('lint', function() {
	gulp.src(
		['./resources/js/**/*.js', 
		'./resources/js/**/*.jsx',
		'!./resources/js/bundle.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('lint-fix', function() {
	gulp.src(
		['./resources/js/**/*.js', 
		'./resources/js/**/*.jsx',
		'!./resources/js/bundle.js'])
		.pipe(eslint({fix: true}))
		.pipe(eslint.format())
		.pipe(gulpIf(isFixed, gulp.dest('./resources/js')))
		.pipe(eslint.failAfterError());
});

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