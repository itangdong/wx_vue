import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index';
Vue.use(Router);

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
  }
]
const router = new Router({
  routes,
})
export default router;