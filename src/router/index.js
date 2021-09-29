import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Prijava',
    name: 'Prijava',
    // route level code-splitting
    // this generates a separate chunk (abou.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Prijava" */ '../views/Prijava.vue')
  },
  {
    path: '/Registracija',
    name: 'Registracija',
    // route level code-splitting
    // this generates a separate chunk (abou.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Registracija" */ '../views/Registracija.vue')
  },

  {
    path: '/Naslovna',
    name: 'Naslovna',
    // route level code-splitting
    // this generates a separate chunk (abou.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Registracija" */ '../views/Naslovna.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
