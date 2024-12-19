<template>
  <div class="card mw-600 rounded-4">
    <div class="card-body p-sm-5 p-4">
      <h4 class="card-title mb-3">Регистрация</h4>
      <form @submit.prevent="register">
        <fieldset :disabled="!serverStatusStore.isServerAvailable">
          <div class="mb-3">
            <label for="name" class="form-label">Имя</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              autocomplete="off"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Е-мейл</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              autocomplete="off"
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
              autocomplete="off"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password_confirmation" class="form-label">Подтверждение пароля</label>
            <input
              v-model="password_confirmation"
              type="password"
              class="form-control"
              id="password_confirmation"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Зарегистрироваться</button>
        </fieldset>
      </form>
      <p>
        <span class="me-3">Уже есть учетная запись?</span>
        <router-link to="/login">Войти</router-link>
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

const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const register = async () => {
  try {
    await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    });

    await router.push('/login');
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
  }
};
</script>

<style scoped></style>
