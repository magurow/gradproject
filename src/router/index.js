import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import AnaSayfa from '../views/AnaSayfa.vue'
import Talepler from '../views/Talepler.vue'
import TalepOlusturma from '../views/TalepOlusturma.vue'
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
    path: '/talep_olusturma',
    name: 'TalepOlusturma',
    component: TalepOlusturma
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
