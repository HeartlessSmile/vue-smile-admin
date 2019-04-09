import axios from "axios";
import qs from "qs";
/**
 * axios -----get请求
 * @param {*} url 请求地址
 * @param {*} params 请求数据
 */
export const axiosGet = (url, params = {}) => {
  return new Promise((resolve, rejects) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        rejects(err)
      })
  })
}
/**
 * axios-- -- - post请求
 * @param {*} url 请求地址
 * @param {*} params 请求数据
 */
export const axiosPost = (url, params = {}) => {
  return new Promise((resolve, rejects) => {
    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        rejects(err)
      })
  })
}


