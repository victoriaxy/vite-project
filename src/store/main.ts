import { defineStore } from 'pinia';

export const useMainsStore = defineStore({
  id: 'main',
  state: () => ({
    name: '管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data:string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  }
});