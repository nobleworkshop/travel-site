var gulp = require("gulp");
var watch = require("gulp-watch"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');

gulp.task('default', function(){
	console.log("Hi! This is gulp task!");
});

gulp.task('html', function(){
	// console.log("Some special about HTML here...");
});

gulp.task('styles', function(){
	// console.log("Imagine CSS tasks here...");
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.*', function(){
		gulp.start('styles');
	})
})
