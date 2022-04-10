import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "PostInside" */ '../views/PostInside.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if ( savedPosition ) {
      return { x: 0, y: savedPosition.y }
    } else {
      if ( from.name === 'Post' && to.name === 'Home' ) {
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve({ x: 0, y: Number(localStorage.getItem('postsScrollTop')) });
        //   }, 300);
        // })
        return { x: 0, y: Number(localStorage.getItem('postsScrollTop')) }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  if ( from.name === 'Home' ) {
    const container = document.querySelector('html');
    localStorage.setItem('postsScrollTop', String(container.scrollTop));
  }

  next();
})

export default router;
