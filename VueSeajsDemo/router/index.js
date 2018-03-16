
define(function(require,exports,moudle){
    //引用home组件
        var app = require("../js/login.js");
        var Router = [
            {
                path: '/',
                name: 'index',
            },
            {
                path: '/login',
                name: 'login',
                component: app.app
            }
        ]
        //向外暴露Router接口 
        exports.router = Router;
    })