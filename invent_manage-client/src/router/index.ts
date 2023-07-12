import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/DashBoard.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('@/views/analytics/Analytics.vue')
    },
    {
      path: '/profile/1',
      name: 'profile',
      component: () => import('@/views/profile/Profile.vue')
    }
  ]
})

export default router
