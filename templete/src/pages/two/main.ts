import { createApp } from 'vue';
import { createPinia } from 'pinia';

import mitt from 'mitt';

import App from './App.vue';

console.log(import.meta.env);

const app = createApp(App);
app.config.globalProperties.$bus = mitt();

app.use(createPinia());
app.mount('#app');
