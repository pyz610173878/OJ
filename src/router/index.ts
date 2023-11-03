import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GlobalHeader from "../components/GlobalHeader.vue";

import { routes } from "../router/routers";

// 这里应该两种引入方式

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
