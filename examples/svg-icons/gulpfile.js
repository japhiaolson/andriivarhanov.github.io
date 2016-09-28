const gulp         = require('gulp-param')(require('gulp'), process.argv);
const sass         = require('gulp-sass');
const concat       = require('gulp-concat');
const postcss      = require('gulp-postcss');
const uglify       = require('gulp-uglify');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const gulpif       = require('gulp-if');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const browserSync  = require('browser-sync').create();
const rename       = require('gulp-rename');
const preprocess   = require('gulp-preprocess');

// Settings to define
// where are files are located
const Paths = {
  build          : 'css/',
  html_source    : 'index.html',
  build_css      : 'css/',
  sass_source    : 'scss/*.scss',
  sass_entry     : 'scss/bundle.scss',
};

// Build styles for dev
gulp.task('styles', function (production) {
  var postcssArg = [
    autoprefixer({ browsers: ['> 2%', 'last 2 versions'] })
  ];

  return gulp.src(Paths.sass_source)
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {title: 'styles', message: err.message}
      })
    }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss(postcssArg))
    .pipe(gulp.dest(Paths.build_css))
    .pipe(browserSync.stream());
});

// Build styles for production
gulp.task('styles:min', function (production) {
  var postcssArg = [
    autoprefixer({ browsers: ['> 2%', 'last 2 versions'] }),
    cssnano
  ];

  return gulp.src(Paths.sass_source)
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {title: 'styles:min', message: err.message}
      })
    }))
    .pipe(sass())
    .pipe(postcss(postcssArg))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(Paths.build_css))
    .pipe(browserSync.stream());
});

// Build styles for production
gulp.task('svg', function (production) {
  return gulp.src('index.template.html')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {title: 'svg', message: err.message}
      })
    }))
    .pipe(preprocess())
    .pipe(rename({
      basename: 'index',
      extname: '.html'
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// Checks if something changes
gulp.task('watch', function () {
  browserSync.init({
    // notify: false,
    ui: false,
    files: 'js/*.js',
    server: {
      index: Paths.html_source
    }
  });

  gulp.watch(Paths.sass_source, ['styles', 'styles:min']);
  gulp.watch(['*.html', 'svg/*.svg'], ['svg']);
});

gulp.task('build', ['styles', 'styles:min', 'svg']);
gulp.task('default', ['build', 'watch']);
