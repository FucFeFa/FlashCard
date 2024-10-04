import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/main/HomePage.vue'; // Đường dẫn đến file HomePage.vue
import SignInUpPage from '../views/main/signInUpPage.vue'; // Đường dẫn chính xác

const routes = [
  { path: '/', component: HomePage }, // Đường dẫn đến trang chính
  { path: '/sign-in-up', component: SignInUpPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
