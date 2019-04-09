import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import {defaultRoute,menuRoute} from './routers'

// import menuArr from './routers'
let menuArr = [...menuRoute,...defaultRoute]
export default new Router({
  routes:menuArr
})
