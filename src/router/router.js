// router/index.js
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/pages/home/index.vue'
import NotFound from '@/views/NotFound.vue'
import ClothingView from "@/pages/clothing/index.vue"
import OrphansView from "@/pages/orphans/index.vue"
import SickView from "@/pages/sick/index.vue"
const routes = [
  { 
    path: '/', 
    component: HomeView, 
    name: 'Home',
    meta: { title: 'HOME' }
  },
  {
    path:"/clothing",
    name:"clothing",
    component : ClothingView,
    meta:{
      title:"CLOTHING"
    }
  },
  {
    path:"/orphans",
    name:"orphans",
    component : OrphansView,
    meta:{
      title:"ORPHANS"
    }
  },
  {
    path:"/sick",
    name:"sick",
    component : SickView,
    meta:{
      title:"SICK"
    }
  },
  { 
    path: "/:pathMatch(.*)*", 
    component: NotFound 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'QAFILATUL MAHABBAH'
  document.title = to.meta.title || defaultTitle
  next()
})

export default router