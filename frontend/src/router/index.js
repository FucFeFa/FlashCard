import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/main/HomePage.vue'; // Đường dẫn đến file HomePage.vue
import SignInUpPage from '../views/main/signInUpPage.vue'; // Đường dẫn chính xác
import ContentPage from '../views/main/CreatePage.vue'
import LearnPage from '@/views/main/LearnPage.vue';

const routes = [
  { path: '/', component: HomePage }, // Đường dẫn đến trang chính
  { path: '/sign-in-up', component: SignInUpPage },
  { path: '/createpage', component: ContentPage },
  { path: '/learnpage', component: LearnPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
