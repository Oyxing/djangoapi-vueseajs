
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
                msg:'aaaaa',
                showindex:true
            }
        },
        mounted(){
            window.onresize = function(){
                    if(document.documentElement.clientWidth >  768){
                        document.getElementById('slider_nav').style.display = 'none';
                        document.getElementById('top').style.transform = 'translate(0px,0)';
                    }
                }
            window.onscroll = function(){
               if(document.documentElement.scrollTop > 50){
                    document.getElementsByClassName('nav')[0].style.background = '#000';
               }else{
                    document.getElementsByClassName('nav')[0].style.background = 'none';
               }
            }
        },
        methods:{
            outlist(){
                var marginright = 0
                var opacity = 0
                document.getElementById('top').style.transform = 'translate(-250px,0)'
                document.getElementById('top').style.transition = 'all 0.8s'
                document.getElementsByClassName('slider_list')[0].style.opacity = opacity
                var time = setInterval(()=>{
                    opacity += 0.1
                    if(opacity > 1){
                        clearInterval(time)
                        this.showindex = false
                        document.getElementsByClassName('slider_list')[0].style.opacity = 1
                    }
                },10)
                document.getElementById('slider_nav').style.display = 'block'
            },
            intlist(){
                var opacity = 1
                document.getElementById('top').style.transform = 'translate(0px,0)'
                document.getElementById('top').style.transition = 'all 0.8s'
                document.getElementsByClassName('slider_list')[0].style.opacity = opacity
                var time = setInterval(()=>{
                    opacity -= 0.05
                    if(opacity < 0){
                        clearInterval(time)
                        this.showindex = true
                        document.getElementsByClassName('slider_list')[0].style.opacity = 0
                        document.getElementById('slider_nav').style.display = 'none'
                    }
                },30)
            },
        }
        
    });
})