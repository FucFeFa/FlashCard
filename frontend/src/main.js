import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'; // Đường dẫn tới file CSS
// import '@/assets/css/contentCreate.css';
import router from './router'

createApp(App).use(router).mount('#app')
