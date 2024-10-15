import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import { useAuthStore } from '../stores/authStore';

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage, meta: { requiresGuest: true }  },
  { path: '/register', component: RegisterPage, meta: { requiresGuest: true }  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.token) {
    try {
      console.log('TRY');
      await authStore.refreshToken();
      await authStore.fetchUser();
      next();
    } catch (error) {
      console.log('CATCH');
      next('/login');
    }
  } else if (to.meta.requiresGuest && authStore.token) {
    console.log('NEED GUEST!');
    next('/');
  } else {
    next();
  }
});

export default router;
