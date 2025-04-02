<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="px-4 px-sm-4 pt-4 menu-container">
          <!-- Пункты меню -->
          <span><RouterLink to="/">Домой</RouterLink></span>
          <span v-if="authStore.isAuthenticated"><RouterLink to="/profile">Профиль</RouterLink></span>
          <span v-if="!authStore.isAuthenticated"><RouterLink to="/login">Вход</RouterLink></span>
          <span v-if="!authStore.isAuthenticated"><RouterLink to="/register">Регистрация</RouterLink></span>
          <span><RouterLink to="/about">О сайте</RouterLink></span>
          <!-- Статус сервера и кнопка обновления -->
          <span v-if="serverStatusStore.isServerAvailable" class="badge text-bg-success">Сервер работает</span>
          <span v-else class="badge text-bg-danger">Сервер недоступен</span>
          <button
            v-if="serverStatusStore.mustShowManualRefresh"
            type="button"
            class="btn btn-sm btn-light refresh-button"
            title="Обновить статус сервера"
          >
            <i class="bi bi-arrow-repeat"></i>
          </button>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-block"></div>
    </div>
    <div class="row min-vh-100">
      <div class="col-md-6 col-12 p-md-4 p-4 pt-md-3 pt-3">
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

.refresh-button {
  padding: 0 7px;

  i {
    display: block;
    margin-top: 2px;
  }
}

.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px 7px;

  span {
    text-wrap: nowrap;
  }

  span,button {
    border: 0 dotted greenyellow;
  }
}
</style>
