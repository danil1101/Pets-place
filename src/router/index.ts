import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../views/HomePage.vue'),
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
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/ResetPasswordPage.vue'),
  },
  {
    path: '/personal-account',
    name: 'personal-account',
    component: () => import('../views/PersonalAccountPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
