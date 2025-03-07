<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col px-4 px-sm-5 pt-4">
        <!-- Пункты меню -->
        <span class="pb-1">
          <span class="pe-2"><RouterLink to="/">Домой</RouterLink></span>
          <span v-if="authStore.isAuthenticated">
            <span class="pe-2"><RouterLink to="/profile">Профиль</RouterLink></span>
          </span>
          <span v-else>
            <span class="pe-2"><RouterLink to="/login">Вход</RouterLink></span>
            <span class="pe-2"><RouterLink to="/register">Регистрация</RouterLink></span>
          </span>
          <span class="pe-2"><RouterLink to="/about">О сайте</RouterLink></span>
        </span>
        <!-- Статус сервера и кнопка обновления -->
        <span class="me-2">
          <span v-if="serverStatusStore.isServerAvailable" class="badge text-bg-success">
            Сервер работает
          </span>
          <span v-else class="badge text-bg-danger me-2">
            Сервер недоступен
          </span>
          <button
            v-if="serverStatusStore.mustShowManualRefresh"
            type="button"
            class="btn btn-sm btn-light"
            title="Обновить статус сервера"
            style="padding: 1px 5px"
          >
            <i class="bi bi-arrow-repeat"></i>
          </button>
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
