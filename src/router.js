import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/home/Home-component.vue';
import NotFundComponent from './components/404/Not-fund-component.vue';



const routes = [
  {
    path: '/', // URL pour la page d'accueil
    name: 'home',
    component: HomeComponent,
  },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFundComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
