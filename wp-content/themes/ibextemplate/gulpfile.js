var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix({
      browsers: ['ie 8-9', 'last 2 versions']
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

// Gulp Sass Task 
gulp.task('bootstrap', function() {
  gulp.src('./bootstrap/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true 
    }))
    .pipe(prefix({
      browsers: ['ie 8-9', 'last 2 versions']
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
// 
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
gulp.task('default', ['sass', 'bootstrap'], function () {
  gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass', 'bootstrap'])
});
