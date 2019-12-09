import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router'

import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/gloable.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
let that = new Vue({
  el: '#app',
  router,
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
