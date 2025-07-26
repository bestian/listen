import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/transcription',
      name: 'transcription',
      component: () => import('../views/TranscriptionView.vue'),
    },
    {
      path: '/transcription_detail/:meeting_id',
      name: 'transcription_detail',
      component: () => import('../views/TranscriptionDetailView.vue'),
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: () => import('../views/JitsiView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
