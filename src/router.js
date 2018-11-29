import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio'
    },
    {
      path: '/home',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    }
  ]
})
