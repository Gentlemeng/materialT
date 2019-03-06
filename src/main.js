// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/reset.css'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css';
// import 'lib-flexible/flexible'
import ElementUI from 'element-ui';
import VueFullPage from 'vue-fullpage.js'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import Echarts from 'echarts'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.echarts = Echarts
// Vue.prototype.axios = axios

Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.use(Echarts)
Vue.use(Vueaxios,axios)
/* eslint-disable no-new */

document.getElementsByTagName("title")[0].innerHTML = "壮达物资",
function () {
    var e = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = 40 * e + "px";
}();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 
