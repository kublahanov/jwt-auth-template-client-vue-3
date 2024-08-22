import { createRouter, createWebHashHistory } from 'vue-router';
// import LoginPage from '@/pages/LoginPage.vue';
// import RegisterPage from '@/pages/RegisterPage.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginPage
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: RegisterPage
    // }
  ]
});

export default router;
