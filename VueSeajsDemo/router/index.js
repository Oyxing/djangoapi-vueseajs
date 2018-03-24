
define(function(require,exports,moudle){
    //引用home组件
        var app = require("../templatejs/login.js");
        var app1 = require("../templatejs/index.js");
        var app2 = require("../templatejs/index1.js");
        var Router = [
            {
                path: '/',
                name: 'index',
                component: app2.app
            },
            {
                path: '/login',
                name: 'login',
                component: app.app
            },
            {
                path: '/login1',
                name: 'login',
                component: app1.app
            }
        ]
        //向外暴露Router接口 
        exports.router = Router;
    })