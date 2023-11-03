import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";

createApp(App).use(store).use(router).use(ArcoVue).mount("#app");
