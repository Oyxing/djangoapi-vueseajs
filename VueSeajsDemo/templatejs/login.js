define(function(require,exports,moudle){
    //引用html文件
        var temp = require("../template/login.tpl")
        var app={
            data:function(){
                return{
                    msgess:'login'
                }
            },
            template:temp,
            created(){
                // console.log('login')
                // console.log(this.$store.state.name)
            }
        }
        exports.app=app
    })