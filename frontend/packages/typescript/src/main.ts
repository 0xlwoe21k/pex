import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Register global common components
// 注册全局通用组件
import publicComponents from "./components/public/";

const app = createApp(App);
app.use(Antd);
app.use(publicComponents);

app.use(router).mount("#app");
