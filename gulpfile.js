var gulp = require('gulp'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


gulp.task('connect', function () {
    connect.server({
        port: 8000,
        name: 'TestApp',
        root: 'dist'
    });
});

gulp.task('initialize',function () {
    gulp.src('./src/assets/**')
        .pipe(gulp.dest('./dist/assets/'));
    gulp.src('./src/app/index.html')
        .pipe(gulp.dest('./dist/'));
    gulp.src('./src/app/**/Views/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./dist/views/'));
});

gulp.task('browserify', function () {
   return browserify('./src/app/app.js')
       .bundle()
       .pipe(source('bundle.js'))
       .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['browserify', 'initialize', 'connect']);