"use strict";

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css');

// css
gulp.task('css', function () {
    return gulp.src('assets/scss/main.scss') // path to folder we are working with
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss()) // minify
        .pipe(rename('main.min.css')) // rename minified
        .pipe(gulp.dest('./assets/css/')) // folder where to save
        .pipe(livereload())
        ;
});

//js
gulp.task('js', function () {
    return gulp.src('assets/js/modules/**/*.js') // path to folder we are working with
        .pipe(concat('main.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('assets/js/'))
        .pipe(livereload())
        ;
});

//html
gulp.task('html',function() {
    return gulp.src('**/*.html')
        .pipe(livereload())
        ;
});

// watch
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/scss/**/*.scss', ['css']);
    gulp.watch('assets/js/modules/**/*.js', ['js']);
    gulp.watch('**/*.html', ['html']);
});

// default
gulp.task('default', ['css','js','html','watch']);