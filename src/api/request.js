import axios from "axios";
import { Indicator } from "mint-ui";
import store from "@/store";
import Vue from "vue";
import router from "@/router";
import { Toast } from "vant";
Vue.use(Toast);

const $axios = axios.create({
  // baseURL:'/api',
  // 发送超时
  // timeout: 5000
});

$axios.interceptors.request.use((config) => {
  Indicator.open("加载中...");
  // vuex中有token，就携带一起请求
  if (store.state.Login.token) {
    config.headers.token = store.state.Login.token;
  }
  return config;
});

$axios.interceptors.response.use((config) => {
  // console.log(config);
  let data = config.data;
  //如果token过期，重新登录,发请求退出登录再跳转登录
  if (data.code == 1000) {
    Indicator.close();
    Toast("需要重新登陆");
    store.commit('Login/LOGOUT')
    return router.push("/login");
  } else {
    Indicator.close();
    return data.data;
  }
});

export default {$axios};
