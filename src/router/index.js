import { createRouter, createWebHistory } from 'vue-router'
import DetailViewVue from '../views/DetailView.vue'
import FavoriteViewVue from '../views/FavoriteView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailViewVue
    },
    {
      path: '/favorites/',
      name: 'favorites',
      component: FavoriteViewVue
    }
  ]
})

export default router
