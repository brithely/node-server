import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from '../components/todo/TodoApp.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/todo',
    name: 'todoApp',
    component: TodoApp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
