import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 请求
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  // 响应
  // instance.interceptors.response.use(res => {
  //   console.log(res);
  //   return res
  // }, err => {
  //   console.log(err);
  // })

  // 3.发送真正的网路请求
  return instance(config)

  // return new Promise((reslove, reject) => {
  //   // 1.创建axios实例
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 2500
  //   })
  //   // 2.发送真正的网路请求
  //   instance(config)
  //     .then(res => {
  //       reslove(res)
  //     }).catch(err => {
  //       reject(err)
  //     })
  // })
}