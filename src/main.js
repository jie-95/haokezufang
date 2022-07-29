import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$bus = new Vue()



//引入路由
import router from "./router/index";

//Vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

