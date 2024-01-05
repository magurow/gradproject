import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import AnaSayfa from '../views/AnaSayfa.vue'
import Talepler from '../views/Talepler.vue'
import TalepOluşturma from '../views/TalepOluşturma.vue'
import Program from '../views/Program.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/anasayfa',
    name: 'AnaSayfa',
    component: AnaSayfa
  },
  {
    path: '/talepler',
    name: 'Talepler',
    component: Talepler
  },
  {
    path: '/talep_oluşturma',
    name: 'TalepOluşturma',
    component: TalepOluşturma
  },
  {
    path: '/program',
    name: 'Program',
    component: Program
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
