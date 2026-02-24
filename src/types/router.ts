import type { RouteRecordRaw } from 'vue-router'

export const ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/margarita'
  },
  {
    path: '/:code',
    name: 'Cocktail',
    component: () => import('@/pages/Cocktail/index.vue'),
    props: true,
    meta: { requiresCocktail: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound/index.vue')
  }
]
