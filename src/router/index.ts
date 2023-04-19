import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'user-setting-page',
    component: () => import('../views/AboutPage.vue'),
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register-page',
    component: () => import('../views/RegisterPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
