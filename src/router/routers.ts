import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GlobalHeader from "../components/GlobalHeader.vue";
import ACCESS_ENUM from "../assets/accessEnum";
import UserLayout from "../layouts/UserLayout.vue";
import UserLoginView from "../views/user/UserLoginView.vue";
import UserRegisterView from "../views/user/UserRegisterView.vue";



export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
]
  }
]
