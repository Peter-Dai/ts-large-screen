import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});

service.interceptors.request.use(config => config, (err) => {
  Promise.reject(err);
});

service.interceptors.response.use(response => response.data, (err) => {
  Promise.reject(err);
});

export default service;
