import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'

// 引入store
import store from './store'

// Vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.prototype.$bus = new Vue()

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
