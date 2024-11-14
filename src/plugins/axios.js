import axios from 'axios';
import { useAuthStore } from '@/stores/authStore.js';

const api = axios.create({
  baseURL: 'http://localhost/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// Интерцептор запроса для добавления токена в заголовки
api.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }

  return config;
});

// Интерцептор ответа для обработки обновления токена
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await authStore.refreshToken(); // Обновляем токен
        originalRequest.headers.Authorization = `Bearer ${authStore.token}`;

        return api(originalRequest); // Повторяем запрос
      } catch (refreshError) {
        await authStore.logout(); // Если ошибка при обновлении токена, разлогиниваем
      }
    }

    return Promise.reject(error);
  }
);

export default api;
