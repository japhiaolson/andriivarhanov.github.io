const gulp         = require('gulp-param')(require('gulp'), process.argv);
const sass         = require('gulp-sass');
const concat       = require('gulp-concat');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const uglify       = require('gulp-uglify');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const gulpif       = require('gulp-if');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const browserSync  = require('browser-sync').create();
// const imagemin     = require('gulp-imagemin'),
// const htmlmin = require('gulp-htmlmin'),

// Settings to define
// where are files are located
const Paths = {
  build          : 'css/',
  html_source    : 'index.html',
  build_css      : 'css/',
  sass_source    : 'scss/*.scss',
  sass_entry     : 'scss/main.scss',
};

// Build styles for dev
gulp.task('styles', function (production) {
  var postcssArg = [
    autoprefixer({ browsers: ['> 2%', 'last 2 versions'] })
  ];

  if (production) postcssArg.push(cssnano);

  return gulp.src(Paths.sass_entry)
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {title: 'styles', message: err.message}
      })
    }))
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss(postcssArg))
    .pipe(concat('main.css'))
    .pipe(gulpif(!production, sourcemaps.write()))
    .pipe(gulp.dest(Paths.build_css))
    .pipe(browserSync.stream());
});

// Checks if something changes
gulp.task('watch', function () {
  browserSync.init({
    // notify: false,
    ui: false,
    files: Paths.html_source,
    server: {
      index: Paths.html_source
    }
  });

  gulp.watch(Paths.sass_source, ['styles']);
});

gulp.task('build', ['styles']);
gulp.task('default', ['build', 'watch']);
