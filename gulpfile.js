var gulp = require('gulp');
gulp = require('gulp-help')(gulp);

var plugins = require('gulp-load-plugins')();

gulp.task('rev', function() {
    gulp.src('**/*.html')
        .pipe(plugins.revEasy())
        .pipe(plugins.rename({
            suffix: '.rev'
        }))
        .pipe(gulp.dest('.'));
});
