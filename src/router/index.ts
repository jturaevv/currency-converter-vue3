import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { ROUTES } from '@/common/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: ROUTES.CONVERTER,
      name: 'converter',
      component: () => import('@/views/ConverterView.vue')
    }
  ]
})

export default router
