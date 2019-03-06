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
          component: resolve => require(['../components/Products.vue'], resolve),
          children:[{
              path:'/productDetail',
              component:resolve=>require(['../components/ProductDetail.vue'],resolve)
          }]
        },
        {
          path: '/information',
          component: resolve => require(['../components/Information.vue'], resolve)
        },
        {
          path: '/contact',
          component: resolve => require(['../components/Contact.vue'], resolve)
        },
      ]
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
        path: "/business",
        redirect: '/home'
    },
    {
        path: "/blank",
        redirect: '/home'
    }
  ]
})
