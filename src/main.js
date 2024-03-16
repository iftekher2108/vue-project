import './assets/main.css'
import './assets/scss/custom-boot.min.css';
import './assets/plugins/bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
