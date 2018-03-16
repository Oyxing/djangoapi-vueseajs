
define(function(require,exports,moudle){
    var Router = require("../router/index.js");
    var Store = require("../vuex/index.js");
//定义路由对象 this.$store.state.httpip
    var router = new VueRouter({
        history: true,
        routes:Router.router    
    });
    var store = new Vuex.Store({
        state:Store.store.state
    })
    console.log(store)
//创建Vue实例
    var app = new Vue({
        el:'#app',
        router:router,
        store:store,
        data:function(){
            return {
                msg:'aaaaa'
            }
        },
        created(){
            console.log('this.$route.path')
            console.log(this.$route.path)
            console.log('this.$store.state')
            console.log(this.$store.state.name)
        }
    });
})