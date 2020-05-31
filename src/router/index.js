import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home/home.vue'
import edit from './edit/edit.vue'
import help from './help/help.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit
  },
  {
    path: '/help',
    name: 'help',
    component: help
  }
]

const router = new VueRouter({
  routes
})

export default router