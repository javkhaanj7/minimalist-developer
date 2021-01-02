import Vue from 'vue'
import App from './App.vue'
require('../node_modules/font-awesome/css/font-awesome.min.css')
require('../node_modules/flag-icon-css/css/flag-icon.min.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
