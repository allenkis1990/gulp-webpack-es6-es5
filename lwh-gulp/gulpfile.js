var browserSync  = require ( 'browser-sync').create();
var gulp=require('gulp');
//var gulpBabel=require('gulp-babel');
var webpack=require('gulp-webpack');



gulp.task('default',function(){

});



gulp.task('serve',['webpack'], function() {
    //console.log(lwhGulpPlus.name);
    gulp.watch(['es6 export import/js/index.js','es6 export import/export/*.js'],function(){
        gulp.run(['webpack']);
    });
    browserSync.init ( {
        ui    : false,
        open  : false,
        port  : 9002,
        //files:'**',//监控自动刷新
        // reloadOnRestart: true,
        server: {
            baseDir   : './es6 export import'//要启动的index所在的文件夹

        }
    } );
});

gulp.task('webpack',function(){
    gulp.src('es6 export import/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('es6 export import/js3'));
});


