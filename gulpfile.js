 //导入所需插件
 const  gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        sass = require('gulp-sass'),
        concat = require('gulp-concat'),
        cssmin = require('gulp-cssmin'),
        imagemin = require('gulp-imagemin');
//发布任务
gulp.task('test',function(){
    console.log('测试任务');
})
//处理js任务
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({"suffix" : ".min"}))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./dist'));
   })
gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
   })
   
//发布监听任务
gulp.task('default',function(){
    gulp.watch(['./src/js/*.js'],['js']);
})
gulp.task('default',function(){
    gulp.watch(['./src/sass/*.scss'],['sass']);
   })