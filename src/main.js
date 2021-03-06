import '@/assets/scss/main.scss'

import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  i18n: i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
