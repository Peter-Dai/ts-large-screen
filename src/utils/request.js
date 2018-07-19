import axios from 'axios';

const httpService = axios.create({
  baseURL: '',
  timeout: 20000,
});

httpService.interceptors.request.use((config) => {
  // helper.showLoading();
  // config.headers['X-Token'] = anthService.getToken()
  console.log(12);
  return config;
}, (err) => {
  // helper.closeLoading();
  Promise.reject(err);
});

httpService.interceptors.response.use((response) => {
  console.log('false');
  // helper.closeLoading();
  return response.data;
}, (err) => {
  console.log('false');
  // helper.closeLoading();
  Promise.reject(err);
});

export default httpService;
