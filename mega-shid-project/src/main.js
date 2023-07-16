import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import store from './store'

createApp(App).use(store).use(PrimeVue).use(router).mount('#app')
