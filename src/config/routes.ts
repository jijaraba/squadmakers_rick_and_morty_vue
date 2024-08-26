import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    children: [
      {
        path: '/',
        name: 'splash',
        meta: { title: 'Splash'},
        component: () => import('@/views/layouts/DefaultLayout.vue'),
        children: [
          {
            path: '/',
            component: () => import('@/views/SplashView.vue'),
            name: 'splash',
            meta: {
              title: 'Splash - Rick and Morty',
            },
          },
          {
            path: '/home',
            component: () => import('@/views/HomeView.vue'),
            name: 'home',
            meta: {
              title: 'Home - Rick and Morty',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.)',
    component: () => import('@/views/layouts/NotFound.vue'),
    meta: {
      loginAvailable: false,
      auth: false,
      title: 'Página no encontrada',
      role: 'Guest',
    },
  },
];
