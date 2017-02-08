var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
 
gulp.task('default', ['ts', 'watch']);

gulp.task('ts', function () {
    return gulp.src('*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
	gulp.watch('*.ts', ['ts']);
});

gulp.task('nodemon', ['ts', 'watch'], function() {
	nodemon({script: 'helloworld.js'});
});