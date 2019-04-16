// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/reset.css'
import './assets/css/base.css'
// import 'element-ui/lib/theme-chalk/index.css';
// import 'lib-flexible/flexible'

import {Menu,Submenu,MenuItem,Pagination,Card,Table,TableColumn,Form,FormItem,Input,Button,Carousel,CarouselItem,Alert,Tree} from 'element-ui'
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(Pagination)
    Vue.use(Card)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Alert)
    Vue.use(Tree)

import App from './App'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */

document.getElementsByTagName("title")[0].innerHTML = "邯郸市壮达物资有限公司",
function () {
    if(document.body.clientWidth<=750){
      var e = document.documentElement.clientWidth / 750;
        document.documentElement.style.fontSize = 100 * e + "px";
        debugger
    } 
}();
// window.onresize = function(event){
//   console.log(document.body.clientWidth)
// }
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 
