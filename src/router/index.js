import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home/home";

import login from "../components/login/login";

import case_list from "../components/case/case_list";
import case_edit from "../components/case/case_edit";
import case_url from "../components/case/case_url";

import mysql_list from "../components/mysql/mysql_list";
import mysql_edit from "../components/mysql/mysql_edit";

import email_list from "../components/email/email_list";
import email_edit from "../components/email/email_edit";

import variable_list from "../components/variable/variable_list";
import variable_edit from "../components/variable/variable_edit";

import group_list from "../components/group/group_list";
import group_edit from "../components/group/group_edit";

import header_list from "../components/headers/header_list";
import header_edit from "../components/headers/header_edit";

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
      path:'/case_list/:page?',
      component:case_list,
      name:'case_list',
      meta: {
              title: "测试用例",
              show: true
          }
    },
    {
      path:'/case_edit/:id?',
      name:'case_edit',
      component:case_edit,
      meta: {
              title: "用例编辑",
              show: true
          }
    },
    {
      path:'/case_url',
      name:'case_url',
      component:case_url,
      meta: {
              title: "项目接口",
              show: true
          }
    },
    {
      path:'/email_list/:page?',
      component: email_list,
      name:'email_list',
      meta: {
              title: "邮件配置列表",
              show: true
          }
    },
    {
      path:'/email_edit/:id?',
      name:'email_edit',
      component: email_edit,
      meta: {
              title: "邮件配置编辑",
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
    {
      name:'variable_list',
      path:'/variable_list/:page?',
      component: variable_list,
      meta: {
              title: "变量列表",
              show: true
          }
    },
    {
      path:'/variable_edit/:id?',
      name:'variable_edit',
      component: variable_edit,
      meta: {
              title: "变量编辑",
              show: true
          }
    },
    {
      path:'/group_list/:page?',
      component: group_list,
      name:'group_list',
      meta: {
              title: "分组列表",
              show: true
          }
    },
    {
      path:'/group_edit/:id?',
      name:'group_edit',
      component: group_edit,
      meta: {
              title: "分组编辑",
              show: true
          }
    },
    {
      path:'/header_list/:page?',
      component: header_list,
      name:'header_list',
      meta: {
              title: "请求头部列表",
              show: true
          }
    },
    {
      path:'/header_edit/:id?',
      name:'header_edit',
      component: header_edit,
      meta: {
              title: "请求头部编辑",
              show: true
          }
    },

  ]
})
