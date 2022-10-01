import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 路由
import router from "@/router";

// vuex
import store from "@/store";


// 公共样式
import "@/assets/css/common.css";
// 字体图标
import "@/assets/fonts/iconfont.css";
// 淘宝无限适配
import "@/assets/js/flexible";
// 共用组件tabbar
import Tabbar from "@/components/common/Tabbar.vue";
Vue.component("Tabbar", Tabbar);
// 首页头部滑动插件
import LyTab from "ly-tab";
Vue.use(LyTab);
// mint-ui
import "mint-ui/lib/style.css";

// 图片懒加载vant
import {
  Lazyload,
  Toast,
  Checkbox,
  CheckboxGroup,
  Card,
  Stepper,
  Dialog,
  AddressEdit,
  RadioGroup,
  Radio,
} from "vant";
import "vant/lib/index.css";
// import 'vant/lib/toast/style';
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Dialog);
Vue.use(AddressEdit);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Card);

new Vue({
  render: (h) => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");

router.beforeEach((to, from, next) => {
  // console.log(to); 
  let isLogin = JSON.parse(localStorage.getItem("isLogin"))
  // console.log(isLogin);
  if (to.matched.some((i) => i.meta.requireAuth)) {
    if (isLogin) next();
    else {
      Toast("需要先进行登录");
      next({
        name: "Login",
        query: { redirect: to.fullPath },
      });
    }
  } else next();

  if (to.matched.some((i) => i.meta.afterLogin)) {
    if (isLogin) {
      Toast("用户已登录");
      next('/')
    } 
  } else next();
});
