import Vue from "vue";
import VueRouter from 'vue-router'
const Register = () =>import ('@/views/Register.vue');
Vue.use(VueRouter);

//改写底层代码
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routers = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Register
        },
        {
            path:'/register',
            name:'register',
            component:Register
        }
    ]
})
export default routers
 