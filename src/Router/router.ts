import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/Store/login'

import CartList from '@/Views/CartList/CartList.vue'
import Home from '@/Views/Home.vue'
import Login from '@/Views/Login/login.vue'
import Product from '@/Views/Product/product.vue'
import Profile from '@/Views/Profile/profile.vue'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    guestOnly?: boolean;
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cartList',
    name: 'cartList',
    component: CartList,

  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  }
  else if (to.meta.guestOnly && isAuthenticated) {
    next({ name: 'profile' })
  }
  else {
    next()
  }
})
