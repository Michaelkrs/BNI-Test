import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const useUserStore = defineStore("user", {
  state: () => ({ isLoading: false, users: [] }),
  actions: {
    async getUsers() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(`${baseUrl}/users`);

        this.users = data.users;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
