import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/ForgotPassword.vue')
  },

  {
    path: '/formulaire',
    name: 'Formulaire',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/Formulaire.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
