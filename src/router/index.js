import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home/home";
import login from "../components/login/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect: {
        path:'/login'
      }
    },
    {
      path:'/home',
      name:'home',
      component:home,
      meta: {
              title: "主页",
              show: true
          }
    },
     {
      path: '/login',
      name:'login',
      component:login,
      meta: {
              title: "登录",
              show: true
          }
    },
  ]
})
