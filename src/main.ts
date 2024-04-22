import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/access";
import "@/assets/style/global.less";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "bytemd/dist/index.css";

createApp(App)
  .use(store)
  .use(ArcoVue)
  .use(router)
  .use(ArcoVueIcon)
  .mount("#app");
