define(function(require,exports,moudle){
    //引用html文件
        var temp = require("../template/index.tpl")
        var app={
            data:function(){
                return{
                    msgess:'index'
                }
            },
            template:temp,
            created(){
                // console.log('index')
                // console.log(this.$store.state.name)
            }
        }
        exports.app=app
    })