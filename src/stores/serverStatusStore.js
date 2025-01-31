import { defineStore } from 'pinia';
import { checkServerStatus } from '../utils/checkServerStatus';

export const useServerStatusStore = defineStore('serverStatusStore', {
  state: () => ({
    isServerAvailable: true,
    mustShowManualRefresh: false,
  }),
  actions: {
    async updateServerStatus() {
      this.isServerAvailable = await checkServerStatus();
    },
    startServerCheck() {
      let count = 0;
      let interval = 500; // Начальный интервал

      this.updateServerStatus();

      let printNumber = () => {
        if (count > 10) {
          this.mustShowManualRefresh = true;
          console.log("Остановлено на", count);
          return;
        }

        var d = new Date();
        var n = d.toLocaleTimeString();

        console.log(count, n);
        this.updateServerStatus();
        count++;

        if (!this.mustShowManualRefresh) {
          setTimeout(printNumber, interval);
          interval += 500; // Увеличиваем интервал
        }
      }

      printNumber();
    },
    stopServerCheck() {
      clearInterval(this.checkInterval);
    }
  }
});
