<template>
  <div class="card mw-600 rounded-4">
    <div class="card-body p-sm-5 p-4">
      <h4 class="card-title mb-3">Вход</h4>
      <form @submit.prevent="login">
        <fieldset :disabled="!serverStatusStore.isServerAvailable">
          <div class="mb-3">
            <label for="email" class="form-label">Е-мейл</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              autocomplete="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              autocomplete="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Войти</button>
        </fieldset>
      </form>
      <p>
        <span class="me-3">Нет учетной записи?</span>
        <router-link to="/register">Создать аккаунт</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { useServerStatusStore } from '@/stores/serverStatusStore.js';

const authStore = useAuthStore();
const serverStatusStore = useServerStatusStore();

const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value
    });

    await router.push('/');
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};
</script>

<style scoped></style>
