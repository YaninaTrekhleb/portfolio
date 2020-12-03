import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from './components/Profile.vue'
import Projects from './components/Projects.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router