import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';
import router from './router'; 


const pinia = createPinia();
pinia.use(piniaPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
