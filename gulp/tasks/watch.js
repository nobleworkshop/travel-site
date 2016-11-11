var gulp = require("gulp"),
	watch = require("gulp-watch"),
	browserSync = require('browser-sync').create();


// Создаем таск вотчера
gulp.task('watch', function(){

	// Запускаем browserSync
	browserSync.init({
		notify: false,
		server: {
		  baseDir: "app"
		}
	});

	// Следим за html файлами
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	// Следим за исходными стилями
	watch('./app/assets/styles/**/*.css', function(){
		// Если изменились запускаем cssInject
		gulp.start('cssInject');
	});

});

// cssInject задача - она зависима от задачи styles
// и сначала запустит ее, и только после ее завершения, 
// запустится сама
gulp.task('cssInject',['styles'], function() {
	// Вовращаем готовый файл со стилями и по нему обновляем CSS стили 
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
