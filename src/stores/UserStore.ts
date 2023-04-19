import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: false,
  }),
  actions: {
    setUser(data: any) {
      this.user = true;
    },
  },
});
