import { defineStore } from 'pinia';
import api from '../plugins/axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await api.post('/auth/login', credentials);
        this.token = response.data.access_token;
        localStorage.setItem('token', this.token);
        await this.fetchUser();
      } catch (error) {
        console.error('Ошибка при входе:', error);
      }
    },
    async register(data) {
      try {
        await api.post('/auth/register', data);
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
      }
    },
    async fetchUser() {
      try {
        const response = await api.get('/auth/me');
        this.user = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    },
    async logout() {
      try {
        await api.post('/auth/logout');
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
      } catch (error) {
        console.error('Ошибка при выходе:', error);
      }
    },
    async refreshToken() {
      try {
        const response = await api.post('/auth/refresh');
        this.token = response.data.access_token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Ошибка при обновлении токена:', error);
      }
    }
  }
});
