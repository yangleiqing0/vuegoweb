import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home/home";

import login from "../components/login/login";

import mysql_list from "../components/mysql/mysql_list";
import mysql_edit from "../components/mysql/mysql_edit";

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
    {
      path:'/mysql_list/:page?',
      component: mysql_list,
      name:'mysql_list',
      meta: {
              title: "数据库配置列表",
              show: true
          }
    },
    {
      path:'/mysql_edit/:id?',
      name:'mysql_edit',
      component: mysql_edit,
      meta: {
              title: "数据库配置编辑",
              show: true
          }
    },
  ]
})
