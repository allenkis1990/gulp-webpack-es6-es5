module.exports={
    entry:__dirname+'/es6 export import/js/index.js',
    output:{
        //path:__dirname+'/build/js',
        filename:'index66.js'
    },
    /*devServer:{
        contentBase:'./',
        host:'192.168.26.252',
        historyApiFallback: true,//解决路由跳转后刷新404问题
        port:'8080'
    },*/
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    }/*,
    watch:true*/
};
