<template>
  <div>
    <h1>Регистрация</h1>
    <form @submit.prevent="register">
      <div>
        <label for="name">Имя</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Пароль</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div>
        <label for="password_confirmation">Подтверждение пароля</label>
        <input
          v-model="password_confirmation"
          type="password"
          id="password_confirmation"
          required
        />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>
      Уже есть учетная запись?
      <router-link to="/login">Войти</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');
const authStore = useAuthStore();
const router = useRouter();

const register = async () => {
  try {
    await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    });
    router.push('/login');
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    alert('Ошибка при регистрации');
  }
};
</script>

<style scoped></style>
