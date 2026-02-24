import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/types/router'
import { COCKTAIL_DATA } from '@/constants/cocktails'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresCocktail) {
    const code = to.params.code as string;

    const exists = COCKTAIL_DATA.some(c => c.code === code);

    if (!exists) {
      return next({ name: 'NotFound' });
    }
  }
  next();
});

export default router;
