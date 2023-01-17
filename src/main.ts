import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from "./router";

const app = createApp(App);




app.use(index);

app.mount("#app");