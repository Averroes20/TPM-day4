import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoDetail from '@/views/TodoDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/TodoListView.vue')
  },
  { path: '/todo/:index', name: 'TodoDetail', component: TodoDetail, props: true }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
