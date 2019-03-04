import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: '/index'
    },
    {
      path: '/home',
      component: resolve => require(['./../components/Index.vue'], resolve),
      children: [{
          path: '/home',
          component: resolve => require(['./../components/Home.vue'], resolve)
        }, {
          path: '/company_introduce',
          component: resolve => require(['./../components/Intruduce.vue'], resolve)
        },
        {
          path: '/products',
          component: resolve => require(['../components/Products.vue'], resolve)
        },
        {
          path: '/information',
          component: resolve => require(['../components/Information.vue'], resolve)
        },
        {
          path: '/contact',
          component: resolve => require(['../components/Contact.vue'], resolve)
        },
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
      path: "/index",
      name: "index",
      component: Index,
    }
  ]
})
