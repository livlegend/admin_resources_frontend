import 'core-js/stable'
import 'prismjs/themes/prism.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import VuePrism from 'vue-prism'


Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VuePrism)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
