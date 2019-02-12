// 接口调用工具
import SYSTEMCONFIG from '@/config/config.js'
import { Message } from 'element-ui';
import axios from 'axios';
import store from '@/store';
import router from '@/router'
import {removeSessionStorage} from '@/assets/js/utils'
// 创建axios实例
const service = axios.create({
	withCredentials:true,
	baseURL: SYSTEMCONFIG.ApiRootUrl, // api的base_url
	timeout: 50000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent

  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    if(typeof(response.data.code) != undefined && response.data.code == -10000){
    	router.replace({
    		path: '/login',
    		query: {redirect: router.currentRoute.fullPath}
    	})
    	return Promise.reject(response.data.resultMsg);
    }
    return response;
}, error => {
  // Do something with response error
  // console.log(error);
  Message({
  	message: error.message,
  	type: 'error',
  	duration: 5 * 1000
  });
  return Promise.reject(error);
});

export default service;