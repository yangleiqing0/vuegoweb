import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router'
import store from './store/index'
import Axios from "axios";

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/gloable.css'
import 'amaze-vue/dist/amaze-vue.css';
import './components/my-common/my-methods'  //全局公用弹窗方法
import './components/my-common/my-var'

// 全局组件
import my_table from "./components/my-common/my_table";
import mail_table from "./components/my-common/my_mailtable";
import my_success_tag from "./components/my-common/my_success_tag";
import my_checkbox from "./components/my-common/my_checkbox";

Vue.component('MyTable', my_table);
Vue.component('MyMailTable', mail_table);
Vue.component('MySucTag', my_success_tag);
Vue.component('MyCheckBox', my_checkbox);
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$axios = Axios;

Axios.interceptors.response.use(res => {
  // 对响应数据做处理
  // console.log("对响应数据做处理", res)
  if(res.data || res.data ===false){
    res = res.data
  }
  if(res.out){
    that.my_logout(false, res.out)
    console.log('response out', res)
  }else {
    that.my_notify(res);
    console.log('response', res)
  }
  return res;
}, err => {
  // 对响应错误做处理
  if(err.data){
    err = err.data
  }
  that.my_notify(err, true);
  return err;
}
);

let that = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// router.beforeEach((to, from, next) => {
//   console.log('router', );
//   /* 路由发生变化修改页面title */
//
//   if (to.meta.title) {
//         document.title = to.meta.title
//       }
// });
