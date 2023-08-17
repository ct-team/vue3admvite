import { createApp } from 'vue';
import pinia from '@/stores/store';

import mitt from 'mitt';

import App from './App.vue';

console.log(import.meta.env);

const app = createApp(App);
app.config.globalProperties.$bus = mitt();

app.use(pinia);
app.mount('#app');
