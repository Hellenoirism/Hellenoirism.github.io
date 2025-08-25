import DefaultLayout from '@/Layouting/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'




const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: DefaultLayout,
      children: [
        { path: "", component: Home }
      ],
    }
    
  ]
  
  const router = createRouter({
    history: createWebHistory(), // history mode (tanpa #)
    routes,
  })
  
  export default router