import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const baseUrl = "https://dummyjson.com";

export const useUserStore = defineStore("user", {
  state: () => ({ isLoading: false, users: [], user: {} }),
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

    async addUser(userData) {
      try {
        const res = await axios.post(`${baseUrl}/users/add`, userData);

        console.log(res);
        router.push("/");
      } catch (error) {
        alert(error);
      }
    },

    async getUserDetail(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/users/${id}`);
        console.log(data);
        this.user = data;
      } catch (error) {
        alert(error);
      }
    },

    async editUser(userData, id) {
      try {
        const res = await axios.put(`${baseUrl}/users/${id}`, userData);

        console.log(res);
        router.push("/");
      } catch (error) {
        alert(error);
      }
    },

    async deleteUser(id) {
      try {
        const res = await axios.delete(`${baseUrl}/users/${id}`, id);

        console.log(res);
      } catch (error) {
        alert(error);
      }
    },
  },
});
