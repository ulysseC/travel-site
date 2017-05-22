var gulp = require('gulp'),
watch= require('gulp-watch');

gulp.task('default',function(){
  console.log("Nahnah");
});

gulp.task('html', function(){
  console.log("holla");
});
gulp.task('styles', function(){
  console.log("imagine");
});
gulp.task('watch',function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/asets/styles/**/*.css', function(){
    gulp.start('imagine');
  });
});
