<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col px-5 pt-4">
        <span class="px-2"><RouterLink to="/">Домой</RouterLink></span>
        <span v-if="authStore.isAuthenticated">
          <RouterLink to="/profile">Профиль</RouterLink>
        </span>
        <span v-if="!authStore.isAuthenticated">
          <span class="px-2"><RouterLink to="/login">Вход</RouterLink></span>
          <span class="px-2"><RouterLink to="/register">Регистрация</RouterLink></span>
        </span>
        <span>
          <span class="px-2"><RouterLink to="/about">О сайте</RouterLink></span>
        </span>
        <span class="ms-3">
          <span v-if="serverStatusStore.isServerAvailable" class="badge text-bg-success">Сервер работает</span>
          <span v-else class="badge text-bg-danger">Сервер недоступен</span>
          <span class="ms-2 badge text-bg-light">{{ serverStatusStore.mustShowManualRefresh }}</span>
        </span>
      </div>
    </div>
    <div class="row min-vh-100">
      <div class="col-md-6 col-12 p-md-5 p-4 pt-md-3 pt-3">
        <RouterView />
      </div>
      <div class="col-md-6 d-none d-md-block">
        <BigLogo />
      </div>
    </div>
  </div>
</template>

<script setup>
import BigLogo from '@/components/BigLogo.vue';
import { useAuthStore } from '@/stores/authStore.js';
import { useServerStatusStore } from '@/stores/serverStatusStore.js';

const authStore = useAuthStore();
const serverStatusStore = useServerStatusStore();

// try {
//   console.log('TRY');
//   await authStore.refreshToken();
//   await authStore.fetchUser();
// } catch (error) {
//   console.log('CATCH');
//   console.log(error);
// }

</script>

<style scoped>
.angled-gradient {
  background: linear-gradient(70deg, lightblue, pink);
}
</style>
