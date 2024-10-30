<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col px-5 pt-4">
        <span class="px-2"><RouterLink to="/">Home</RouterLink></span>
        <span v-if="authStore.isAuthenticated">
          <RouterLink to="/profile">Profile</RouterLink>
        </span>
        <span v-if="!authStore.isAuthenticated">
          <span class="px-2"><RouterLink to="/login">Login</RouterLink></span>
          <span class="px-2"><RouterLink to="/register">Register</RouterLink></span>
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

const authStore = useAuthStore();
</script>

<style scoped>
.angled-gradient {
  background: linear-gradient(70deg, lightblue, pink);
}
</style>
