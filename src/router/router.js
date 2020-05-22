import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);
import routes from '@/routes/routes'
export default new VueRouter({
  routes,
  //nav点击选中
  linkActiveClass:"active"
})