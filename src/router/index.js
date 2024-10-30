import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
import { useAuthStore } from '../stores/authStore';

const routes = [
  { path: '/', component: HomePage, meta: {} },
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage, meta: { requiresGuest: true } },
  { path: '/register', component: RegisterPage, meta: { requiresGuest: true } },
  { path: '/:catchAll(.*)*', component: ErrorNotFound }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // console.log('NEED AUTH!');
    next('/login');

    // try {
    //   console.log('TRY');
    //   await authStore.refreshToken();
    //   await authStore.fetchUser();
    //   next();
    // } catch (error) {
    //   console.log('CATCH');
    //   next('/login');
    // }
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    // console.log('NEED GUEST!');
    next('/');
  } else {
    // console.log('NEXT');
    next();
  }
});

export default router;
