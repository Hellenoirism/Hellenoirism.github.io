import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'




const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    
  ]
  
  const router = createRouter({
    history: createWebHistory(), // history mode (tanpa #)
    routes,
  })
  
  export default router