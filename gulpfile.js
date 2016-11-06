var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task('default', function(){
	console.log("Hi! This is gulp task!");
});

gulp.task('html', function(){
	console.log("Some special about HTML here...");
});

gulp.task('styles', function(){
	console.log("Imagine CSS tasks here...");
});

gulp.task('watch', function(){
	watch('.//app/index.html', function(){
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.*', function(){
		gulp.start('styles');
	})
})
