import { defineStore } from 'pinia';
import { checkServerStatus } from '../utils/checkServerStatus';

export const useServerStatusStore = defineStore('serverStatusStore', {
  state: () => ({
    isServerAvailable: true,
  }),
  actions: {
    async updateServerStatus() {
      this.isServerAvailable = await checkServerStatus();
    },
    startServerCheck(interval = 5000) {
      this.updateServerStatus();
      this.checkInterval = setInterval(this.updateServerStatus, interval);
    },
    stopServerCheck() {
      clearInterval(this.checkInterval);
    }
  }
});
