var gulp=require('gulp');
var less=require('gulp-less');
var connect = require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var htmlMin=require('gulp-minify-html');
var rename=require('gulp-rename');
var cssMin=require('gulp-minify-css');
var imageMin=require('gulp-imagemin');
var jshint=require('gulp-jshint');
var autoprefixer = require ( 'gulp-autoprefixer' );
var serveStatic  = require ( 'serve-static' );
var lwhGulpPlus=require('./lwh-gulp-plus/config.js');//自定义文件

var browserSync  = require ( 'browser-sync').create();
//gulp命令定义参数 gulp test -a admin -b front
//options.a=admin  options.b=front
var minimist     = require ( 'minimist' );
var options      = minimist ( process.argv.slice ( 2 ) );


var zip=require('gulp-zip');
var clean=require('gulp-clean');
var fs=require('fs');
var path=require('path');
var rev=require('gulp-rev');//自动添加版本号
var revReplace=require('gulp-rev-replace');//替换引入的文件为加上版本号的文件
var removeLogs   = require ( 'gulp-removelogs' );   // 删除console.log


gulp.task('data',function(){
    gulp.src('./js').on('data',function(file){
        console.log(file.path);
    });
});


//去除console.log
gulp.task('removeLogs',function(){
    gulp.src('./js/*.js').pipe(removeLogs()).pipe(gulp.dest('./removeLogs'));
});


//压缩html文件夹为html.zip 排除a2这个文件夹
gulp.task('zip',function(){
    gulp.src(['./html/**/*.*','!./html/a2/**/*.*']).pipe(zip('html.zip')).pipe(gulp.dest('./'));
});

//gulp.task(‘zip‘, function() {
    //return gulp.src(‘**/*.*‘)
     //.pipe(zip(‘test.zip‘))
     //.pipe(gulp.dest(‘export‘));
     //});


gulp.task('rev',function(){
    gulp.src('./js/*.js').pipe(rev())
        //生成后的JS在rev文件夹
        .pipe(gulp.dest('./rev'))
        //把版本对应json生成在revjson文件夹
        .pipe(rev.manifest())
        .pipe(gulp.dest('./revjson'));
});



var manifest=gulp.src('./revjson/rev-manifest.json');
//把html文件夹下的有引用到js css或者等等 替换成rev-manifest规则下动态生成的地址
gulp.task('revReplace',function(){
    gulp.src('./html/**/*.*')
        .pipe ( revReplace ( {
        manifest           : manifest,
        replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.json']
    }

    )).pipe(gulp.dest('./she22'));
});
/*.pipe ( revReplace ( {
    manifest           : manifest,
    replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.json']
} ) )
    .pipe ( gulp.dest ( config.getPublicBase ()*/


gulp.task('autoprefixer',function(){
    gulp.src('./css/test.css').pipe(autoprefixer()).pipe(gulp.dest('aa'));
});


gulp.task('lwhserve',function(){
    //gulp.run(['createModule']);
    gulp.run(['writeStateContent']);
    gulp.watch('./project/js/state/*-state.js',['writeStateContent']);
});


gulp.task('createModule',function(){
    var mainProjectBase='./project/js/modules';
    var mainProjectViews='./project/views';
    var mainProjectStates='./project/js/state';
    //console.log(options.m);
    fs.mkdirSync(mainProjectBase+'/'+options.m);
    fs.mkdirSync(mainProjectBase+'/'+options.m+'/controller');
    fs.writeFileSync(mainProjectBase+'/'+options.m+'/controller/'+(options.m+'-ctrl.js'),options.m+'Ctrl',{ encoding: 'utf-8' });
    fs.mkdirSync(mainProjectBase+'/'+options.m+'/services');
    fs.writeFileSync(mainProjectBase+'/'+options.m+'/services/'+(options.m+'-service.js'),options.m+'Service',{ encoding: 'utf-8' });

    fs.mkdirSync(mainProjectViews+'/'+options.m);
    fs.writeFileSync(mainProjectViews+'/'+options.m+'/'+(options.m+'.html'),options.m+'Html',{ encoding: 'utf-8' });

    fs.writeFileSync(mainProjectStates+'/'+(options.m+'-state.js'),'',{ encoding: 'utf-8' });


    gulp.run(['writeStateContent']);
    //写入没有的话就创建
    //fs.writeFileSync('./heihei/index.html','heihei',{ encoding: 'utf-8' });
});




gulp.task('writeStateContent',function(){
    var baseState='./project/js/state/';
    var stream=gulp.src('./project/js/state/*-state.js');
    var obj={};
    stream.on('data',function(file){
        console.log(file.path);
        console.log(1);
    });

    /*stream.on('end',function(){
        fs.writeFileSync('./project/js/state/'+('haha-state.js'),obj.path,{ encoding: 'utf-8' });
    });*/

    /*var reg=/\%\%moduleName\%\%/;
    function createStr(moduleName){
        return ('"%%moduleName%%"').replace(reg,moduleName);
    }

    var arr=fs.readdirSync(baseState);

    for(var i=0;i<arr.length;i++){
        fs.writeFileSync(baseState+arr[i],createStr(arr[i]) ,{ encoding: 'utf-8' });
    }*/

    //console.log(arr);
});



gulp.task('basename',function(){
    //获取路径中的文件名
    console.log(path.basename('./dest/a2'));
});

gulp.task('path',function(){
    //算出相对路径
    var hahapath=path.relative('./dest','./dest/a2/parent/child/a1.html');
    console.log(hahapath);
});


gulp.task('statSync',function(){
    var directory=fs.statSync('./hahaha/test.txt');
    //判断是否是文件夹类型
    console.log(directory.isDirectory());
});

gulp.task('mkdirSync',function(){
    if(!fs.existsSync('./hahaha')){
        fs.mkdirSync('./hahaha');
    }
    if(!fs.existsSync('./hahaha/hehe')){
        fs.mkdirSync('./hahaha/hehe');
    }
    //fs.mkdirSync('./hahaha/hehe');
    //gulp.src('./main/index.html').pipe(gulp.dest('./hahaha'));
});

gulp.task('readFile',function(){
    if(!fs.existsSync('./hahaha')){
        fs.mkdirSync('./hahaha');
    }
    if(!fs.existsSync('./hahaha/hehe')){
        fs.mkdirSync('./hahaha/hehe');
    }

    //r+为读写  w+为读写，没有的话就创建
    fs.readFileSync('./hahaha/test.txt', {flag: 'w+', encoding: 'utf8'}, function (err, data) {
        if(err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
    var w_data = '这是一段通过fs.writeFile函数写入的内容111；\r\n';
    fs.writeFileSync('./hahaha/test.txt', w_data, {flag: 'a'}, function (err) {
        if(err) {
            console.error(err);
        } else {
            console.log('写入成功');
        }
    });
});

//追加文件内容
gulp.task('appendFile',function(){
    fs.appendFile('./hahaha/test.txt', '使用fs.appendFile追加文件内容', function () {
        console.log('追加内容完成');
    });
});

gulp.task('openFile',function(){
    fs.open('./hahaha/test.txt', 'r', '777', function (err, fd) {
        console.log(fd);
    });
});

gulp.task('readdir',function(){
    //输出['hehe','test.txt'] 就算某些路径是undefined也可以正常运行
    var obj=fs.readdirSync('.////hahaha////');
    console.log(obj);
});

gulp.task('heihei',function(){
    fs.mkdirSync('./heihei');
    //写入没有的话就创建
    fs.writeFileSync('./heihei/index.html','heihei',{ encoding: 'utf-8' });
});

//删除文件或者文件夹
gulp.task('clean',function(){
    gulp.src('./hahaha/*').pipe(clean());
});

gulp.task('browser-sync', function() {
    //console.log(lwhGulpPlus.name);
    browserSync.init ( {
        ui    : false,
        open  : false,
        port  : 9002,
        //files:'**',//监控自动刷新
        // reloadOnRestart: true,
        server: {
            baseDir   : './main',//要启动的index所在的文件夹
            //middleware: middleware || []
            //如果找不到images这个文件夹那么就会到temp文件夹找  如果虚构一个lwhstyle文件夹那么可以用后面这个操作
            middleware: [
                serveStatic('./temp'),
                {route:'/lwhstyle',handle:serveStatic('./css')}
            ]
        }
    } );
});

gulp.task('default',function(){
    console.log(1111);
});


gulp.task('taskOne',function(cb){
    setTimeout(function(){
        console.log('taskOne');
        cb();
    },3000);
});

gulp.task('taskTwo',['taskOne'],function(){
    console.log('taskTwo');
});



gulp.task('copy',function(){
    return gulp.src('html/a2/parent/**/*.html',{base:'html'}).pipe(gulp.dest('dest'));
});

gulp.task('watch',function(){
    gulp.watch('html/a1/a1.html',function(e){
        console.log(e);
    });
});

//gulp.task('copyImg',function(){
    //gulp.src('images/*.{png,jpg}').pipe(gulp.dest('copyImg'));
//});

gulp.task('copyImg',function(){
    gulp.src(['!images/*.png','images/*.gif']).pipe(gulp.dest('copyImg'));
});


//生成CSS并压缩
gulp.task('less',function(){
    gulp.src('less/style.less').pipe(less()).pipe(gulp.dest('css')).pipe(cssMin()).pipe(gulp.dest('css'));
});




//本地服务器 实现自动刷新浏览器 start

gulp.task('watchHtml',function(){
    gulp.watch('main/index.html',['reload']);
});

gulp.task('reload',function(){
    gulp.src('main/index.html').pipe(connect.reload());
});

gulp.task('server',function(){
    connect.server({
        root:'main',//服务器的根目录
        port:9008, //服务器的地址，没有此配置项默认也是 8080
        livereload:true
    });
});

gulp.task('reloadExplor',['server','watchHtml']);
//本地服务器 实现自动刷新浏览器 end


//合并并且压缩 start
gulp.task('concat',function(){
    gulp.src(['js/a1.js','js/a2.js']).pipe(concat('concat.js')).pipe(uglify()).pipe(gulp.dest('dest/js'));
});
//合并并且压缩 end

gulp.task('htmlMin',function(){
    gulp.src('html/a1/a1.html').pipe(htmlMin()).pipe(gulp.dest('dest/html'));
});

gulp.task('rename',function(){
    gulp.src('html/a1/a1.html').pipe(rename('rename.html')).pipe(gulp.dest('dest/rename'));
});


gulp.task('imgMin',function(){
    gulp.src('images/*.{png,jpg,gif}').pipe(imageMin()).pipe(gulp.dest('dest/imgMin'));
});

//查语病
gulp.task('jshint',function(){
    gulp.src('js/a1.js').pipe(jshint()).pipe(jshint.reporter());
});//gulp-jshint