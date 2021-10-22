import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from './components/Profile.vue'
import Projects from './components/Projects.vue'
import Certificates from './components/Certificates.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: Profile
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Certificates',
    name: 'Certificates',
    component: Certificates
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router