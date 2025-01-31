import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useServerStatusStore } from '@/stores/serverStatusStore.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

/**
 * Проверка статуса сервера.
 */
const serverStatusStore = useServerStatusStore();
serverStatusStore.startServerCheck();

app.mount('#app');
