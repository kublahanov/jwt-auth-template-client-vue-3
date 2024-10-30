<template>
  <div class="card mw-600 rounded-4">
    <div class="card-body p-sm-5 p-4">
      <h4 class="card-title mb-3">Профиль</h4>
      <div v-if="authStore.isAuthenticated">
        <div class="profile">{{ authStore.getUser }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
</script>

<style scoped>
.profile {
  font-size: 0.8rem;
  white-space: pre-wrap;
  background-color: lightgray;
  padding: 20px;
  border-radius: 15px;
}
</style>
