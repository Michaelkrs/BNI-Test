import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LayoutView from "../views/LayoutView.vue";

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
      ],
    },
  ],
});

export default router;
