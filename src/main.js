import Vue from 'vue'
import App from './App.vue'
//加载路由器 数据仓库 图标字体
import router from "@/router/router.js"
import store from '@/store/store.js'
import "@/common/stylus/iconmoon.styl"
import "@/common/stylus/transition.styl"

Vue.config.productionTip = false
//定义全局组件
import icon from "components/icon/icon"
Vue.component("v-icon",icon)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
