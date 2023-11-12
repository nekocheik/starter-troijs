import { createWebHistory, createRouter } from 'vue-router';
// import Home from '@/views/HomePage.vue';
// import { ENV } from '../hooks/useEnv';
// import { parseJwt } from '@/helpers/jwtDecode';
import getEnv from '@/helpers/getEnv';
import Home from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    if (from.name === 'Explorer' && to.name === 'Explorer') {
      return;
    }
    if (to.name != from.name) {
      return {
        top: 0,
      };
    }
    // return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach(() => {
  const env = getEnv;

  console.log(env.realEnvName);
});

export default router;
