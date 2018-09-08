// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/reset.css'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueFullPage);
/* eslint-disable no-new */
document.getElementsByTagName("title")[0].innerHTML = "壮达物资",
function () {
    var e = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = 100 * e + "px";
}();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 
