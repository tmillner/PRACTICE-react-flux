import gulp from 'gulp';
import browserify from 'browserify';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import babel from 'gulp-babel';

gulp.task('babel', () => {
	// Glob style matching
	gulp.src(['./src/**/*.es6',])
		.pipe(babel({'presets' : ['react', 'es2015']}))
		.pipe(gulp.dest('src'));
});

gulp.task('browserify', () => {
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copyToDest', () => {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest('dist/assets'));
});
 
let defaultTasklist = ['babel', 'browserify', 'copyToDest']
gulp.task('watch', defaultTasklist, () => {
	gulp.watch('/src/**/*.es6', ['babel']);
	gulp.watch('/src/**/*.*', ['browserify', 'copyToDest']);
});

gulp.task('default', ['watch']);

//let defaultTasklist = ['babel', 'browserify', 'copyToDest']
//gulp.task('default', defaultTasklist, () => {
//	// The below is NOT good bc since babel generates new files
//	// And the glob is *.*, it will endlessly reparse the 
//	// 'newly' generate files
//	return gulp.watch('src/**/*.*', defaultTasklist);
//});