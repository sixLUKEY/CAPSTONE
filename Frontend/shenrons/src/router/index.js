import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/items',
    name: 'items',
    component: () => import('../views/ItemsView.vue')
  },
  {
    path: '/items/:id',
    name: 'singleItem',
    component: () => import('../views/SingleItemView.vue')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView.vue'),
    children: [
      {
        path: 'frieza',
        component: () => import('../components/Frieza.vue')
      },
      {
        path: 'goku',
        component: () => import('../components/Goku.vue')
      },
      {
        path: 'jiren',
        component: () => import('../components/Jiren.vue')
      },
      {
        path: 'vegeta',
        component: () => import('../components/Vegeta.vue')
      },
      {
        path: 'zamasu',
        component: () => import('../components/Zamasu.vue')
      },
      {
        path: 'cell',
        component: () => import('../components/Cell.vue')
      },
      {
        path: 'buu',
        component: () => import('../components/Buu.vue')
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'users',
        component: () => import('../views/AdminUsersView.vue')
      },
      {
        path: 'items',
        component: () => import('../views/AdminItemsView.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
