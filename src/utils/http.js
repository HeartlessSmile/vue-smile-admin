import axios from 'axios'
import store from '@/store'
import router from '@/router'
// import api from '@/utils/api'
// import QS from 'qs'
import {
  Message
} from 'iview'

const http = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 1000 * 60 * 60
})


// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(function (config) {
    // 处理请求之前的配置 加入token
    if (store.state.user.token) {
        config.headers.common['tk'] = store.state.user.token
    }

    // 解决ie的缓存兼容问题
    if(config.url.includes('?')){
        config.url += '&t=' + new Date().getTime()
    }else{
        config.url += '?t=' + new Date().getTime()
    }


  return config;
}, function (error) {
  // 请求失败的处理

  return Promise.reject(error);
});


// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(function (response) {
  if (response.data.code == '000004') {
    Message.error('请求接口失败');
  }
   
  return response;
}, error => {
  // 处理响应失败  ----token 失败
  if (error.response.data.code == '001002') {
    //  alert("token过期，清除登录信息")
    store.commit('removeUser')
    Message.error(error.response.data.msg);
    router.push({
      path: '/login'
    })
  }

  return Promise.reject(error);
});
export default http
