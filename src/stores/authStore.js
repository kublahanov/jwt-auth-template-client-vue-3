import { defineStore } from 'pinia';
import api from '../plugins/axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token && state.user),
    getUser: (state) => {
      let user = state.user;

      if (!user) {
        user = {
          name: 'Гость'
        };
      }

      return user;
    }
  },
  actions: {
    async login(credentials) {
      try {
        const response = await api.post('/auth/login', credentials);
        console.log('login', response);
        this.token = response.data.access_token;
        localStorage.setItem('token', this.token);
        await this.fetchUser();
      } catch (error) {
        console.error('Ошибка при входе:', error);
      }
    },

    async register(data) {
      try {
        const response = await api.post('/auth/register', data);
        console.log('register', response);
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
      }
    },

    async fetchUser() {
      try {
        const response = await api.get('/auth/me');
        console.log('fetchUser', response);
        this.user = response.data.user;
        localStorage.setItem('user', JSON.stringify(this.user));
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
        localStorage.removeItem('user');
      } catch (error) {
        console.error('Ошибка при выходе:', error);
      }
    },

    async refreshToken() {
      try {
        const response = await api.post('/auth/refresh');
        console.log('refreshToken', response);
        this.token = response.data.access_token;
        localStorage.setItem('token', this.token);
        await this.fetchUser();
      } catch (error) {
        console.error('Ошибка при обновлении токена:', error);
      }
    }
  }
});
