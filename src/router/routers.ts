import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GlobalHeader from "../components/GlobalHeader.vue";
import ACCESS_ENUM from "../assets/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: GlobalHeader,

    meta: {
      hideInmenu: true,
    },
  },
  {
    path: "/about",
    name: "关于我的",
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GlobalHeader.vue"),
  },
];
