<template>
  <div class="card mw-600 rounded-4">
    <div class="card-body p-sm-5 p-4">
      <h4 class="card-title mb-3">Главная страница</h4>
      <p>Привет, <strong>{{ authStore.getUser.name }}</strong>!</p>
      <div v-if="authStore.isAuthenticated">
        <button type="submit" class="btn btn-primary mt-2 mb-3" @click="logout">Выйти</button>
      </div>
      <div v-else>
        <p>
          <span class="me-3">Уже зарегистрированы?</span>
          <router-link to="/login">Войти</router-link>
        </p>
        <p>
          <span class="me-3">Нет учетной записи?</span>
          <router-link to="/register">Создать аккаунт</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
};
</script>

<style scoped></style>
