import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Ripple from 'vue-ripple-directive'
import VTooltip from 'v-tooltip'

Vue.directive('ripple', Ripple);
Vue.use(VTooltip);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
