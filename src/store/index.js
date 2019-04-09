import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import user from './modules/user'
import app from './modules/app'
const store = new Vuex.Store({
    state: {
        
    },
    modules:{
    	user,app
    },
    getters: {
    },
    mutations: {
        
    },
    actions: {
         
    },
    // plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})

export default store;
