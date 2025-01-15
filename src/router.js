import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/home/Home-component.vue';



const routes = [
  {
    path: '/', // URL pour la page d'accueil
    name: 'home',
    component: HomeComponent,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
