import Vue from 'vue'
import axios from 'axios';
import VueCookie from 'vue-cookie';
import VueAxios from 'vue-axios';


import App from './App.vue'
import router from './router/index';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueCookie);

axios.interceptors.request.use((request) => {
  return request;
})
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.code != 0) {
    alert(res.message);
  }
  return response;
},(err) => Promise.reject(err));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
