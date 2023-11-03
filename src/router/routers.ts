import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GlobalHeader from "../components/GlobalHeader.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "题目",
    component: GlobalHeader,
  },
  {
    path: "/about",
    name: "关于我的",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GlobalHeader.vue"),
  },
];
