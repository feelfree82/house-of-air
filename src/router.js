import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})
