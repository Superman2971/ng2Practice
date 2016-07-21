var gulp = require('gulp');
var webserver =require('gulp-webserver');
var typescript =require('gulp-typescript');
var sourcemaps =require('gulp-sourcemaps');
var tscConfig =require('./tsconfig.json');

var appSrc = 'app/';

gulp.task('html', function() {
  gulp.src(appSrc + '**.*.html');
});

gulp.task('css', function() {
  gulp.src(appSrc + '**.*.css');
});

gulp.task('copyLibs', function() {
  return gulp.src([
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js'
  ]).pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

gulp.task('typescript', function() {
  return gulp.src(appSrc + '**/*.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tscConfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(appSrc + '**.*.ts', ['typescript']);
  gulp.watch(appSrc + '**/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(appSrc).pipe(webserver({
    livereload: true,
    open: true
  }));
});

gulp.task('default', ['copyLibs', 'typescript', 'watch', 'webserver']);
