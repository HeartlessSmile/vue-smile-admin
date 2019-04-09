// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}
import Vue from 'vue';
import App from './App';
import sloading from './components/sloading'
import router from './router';
import https from './utils/http';
import './assets/css/iview_patch.less';
import "./assets/fonts/iconfont.css";
import config from '@/config'
Vue.prototype.$config = config

// 引入vuex
import store from './store'
Vue.prototype.$http = https;
// 基础样式
import './assets/css/style.css';
import iView from 'iview';

// import TreeTable from '_c/vue-tree-table';
Vue.use(iView)
// Vue.use(TreeTable)
Vue.use(sloading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
