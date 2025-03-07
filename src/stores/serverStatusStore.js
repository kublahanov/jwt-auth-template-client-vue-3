import { defineStore } from 'pinia';
import { checkServerStatus } from '../utils/checkServerStatus';

export const useServerStatusStore = defineStore('serverStatusStore', {
  state: () => ({
    /**
     * Флаг доступности сервера.
     */
    isServerAvailable: false,

    /**
     * Флаг количества оставшихся шагов проверки доступности сервера,
     * до перехода в ручной режим (проверки доступности сервера).
     */
    mustShowManualRefresh: false,

    /**
     * Хранит интервал, для запуска периодической проверки доступности сервера
     * (если его доступность не прерывалась).
     */
    serverLiveInterval: null
  }),
  actions: {
    async updateServerStatus() {
      await checkServerStatus()
        .then((response) => {
          this.isServerAvailable = response;
          console.log('updateServerStatus OK', response);
        })
        .catch((error) => {
          this.isServerAvailable = false;
          console.log('updateServerStatus ERROR', error)
        });
    },
    startServerCheck() {
      let count = 0;
      let interval = 500; // Начальный интервал

      this.updateServerStatus();

      /**
       * Вызывается в случае прерывания доступности сервера.
       * Отрабатывает заданное количество проверок,
       * а затем переводит систему в ручной режим
       * (флаг mustShowManualRefresh).
       */
      const checkServerCountdown = () => {
        if (count >= 5) {
          this.mustShowManualRefresh = true;
          console.log('Остановлено на', count);
          return;
        }

        var currentTime = (new Date()).toLocaleTimeString();

        this.updateServerStatus();
        count++;

        if (!this.isServerAvailable) {
          if (!this.mustShowManualRefresh) {
            console.log('Остаёмся на checkServerCountdown', count, currentTime);
            setTimeout(checkServerCountdown, interval);
            interval += 500; // Увеличиваем интервал (миллисекунд)
          }
        } else {
          console.log('Переключение на checkServerLive');
          this.serverLiveInterval = checkServerLive();
        }
      };

      /**
       * Запускает периодическую проверку доступности сервера.
       * Работает по интервалу.
       */
      const checkServerLive = () => {
        // return setInterval(() => this.updateServerStatus(), 1000 * 60 * 5);
        return setInterval(() => {
          console.log('checkServerLive', this.serverLiveInterval);
          this.updateServerStatus()
        }, 1000 * 5);
      };

      if (!this.isServerAvailable) {
        if (this.serverLiveInterval) {
          clearInterval(this.serverLiveInterval);
        }

        checkServerCountdown();
      } else {
        if (!this.serverLiveInterval) {
          this.serverLiveInterval = checkServerLive();
        }
      }
    }
  }
});
