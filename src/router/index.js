import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
          path: '/Intruduction',
          component: resolve => require(['./../components/Intruduction.vue'], resolve)
        },
        // {
        //   path: '/mapdata', 
        //   component: resolve => require(['../components/page/MapData.vue'], resolve)
        // },
        // {
        //   path: '/treeshow',
        //   component: resolve => require(['../components/page/treeShow.vue'], resolve)
        // },
        // {
        //   path: '/GFPData',
        //   component: resolve => require(['../components/page/GFPData.vue'], resolve)
        // },
        // {
        //   path: '/Editor',
        //   component: resolve => require(['../components/page/Editor.vue'], resolve)
        // }
      ]
    },
    {
      path: "/business",
      name:"home",
      component:Home,
    },
    {
      path: "/blank",
      name: "home",
      component: Home,
    }
  ]
})
