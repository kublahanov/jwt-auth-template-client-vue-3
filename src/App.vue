<script setup>
import BigLogo from '@/components/BigLogo.vue';
</script>

<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col px-5 pt-4">
        <span class="px-2"><RouterLink to="/">Home</RouterLink></span>
        <span class="px-2"><RouterLink to="/login">Login</RouterLink></span>
        <span class="px-2"><RouterLink to="/register">Register</RouterLink></span>
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

<style scoped>
.angled-gradient {
  background: linear-gradient(70deg, lightblue, pink);
}
</style>
