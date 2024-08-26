import { createWebHistory, createRouter } from 'vue-router';
import CONFIG from '@/config';

const router = createRouter({
  history: createWebHistory(),
  routes: CONFIG,
});

// @ts-ignore
router.beforeEach((to, from, next) => {
  document.title = 'Rick and Morty';
  next();
});

export default router;
