// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/reset.css'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css';
import {Carousel, CarouselItem} from 'element-ui'
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueFullPage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 
