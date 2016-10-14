"use strict";

// Old JS style
let gulp = require('gulp');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

// New ES2015 style using modules
//import gulp from 'gulp';

gulp.task("transpile", () => {
    return browserify('src/app.js')
        .transform('babelify')
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", ["transpile"], () => {
	gulp.watch('src/**/*.js', ["transpile"]);
});

gulp.task("default", ["transpile"]);
