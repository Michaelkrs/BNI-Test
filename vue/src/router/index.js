import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LayoutView from "../views/LayoutView.vue";
import AddUserPage from "../views/AddUserPage.vue";
import EditUserPage from "../views/EditUserPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: LayoutView,
      children: [
        {
          path: "",
          name: "home",
          component: HomePage,
        },
        {
          path: "add",
          name: "add",
          component: AddUserPage,
        },
        {
          path: "edit/:id",
          name: "edit",
          component: EditUserPage,
        },
      ],
    },
  ],
});

export default router;
