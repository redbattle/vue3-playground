import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/weather'
    },
    {
      path: '/weather',
      component: import('@/views/weather.vue'),
    },
    {
      path: '/threejs',
      component: import('@/views/three-js.vue'),
    },
  ],
})

export default router
