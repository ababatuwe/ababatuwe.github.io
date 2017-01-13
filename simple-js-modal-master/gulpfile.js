'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

var reload  = browserSync.reload;

var paths = {
  rootDir: './',
  css: {
    source: 'css/scss/',
    dest: 'css/'
},
  js: {
    source: 'js/source/',
    dest: 'js/'
  }
};

// JS minify
gulp.task('js', function() {
  return gulp.src(paths.js.source + '*.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.js.dest));
});

// Sass compiler
gulp.task('sass', function() {
  return gulp.src(paths.css.source + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dest));
});

// Reload browser
gulp.task('js-watch', ['js'], function() {
  browserSync.reload();
});
gulp.task('css-watch', ['sass'], function() {
  browserSync.reload();
});

gulp.task('serve', ['js', 'sass'], function () {
    browserSync.init({
        server: {
            baseDir: paths.rootDir
        }
    });

    gulp.watch(paths.js.source + '*.js', ['js-watch']);
    gulp.watch(paths.css.source + '*.scss', ['css-watch']);
});

gulp.task('default', ['serve'], function() {

});
