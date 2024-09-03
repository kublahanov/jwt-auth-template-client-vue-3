<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать, {{ authStore.user.name }}!</p>
    <button @click="logout">Выйти</button>
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
