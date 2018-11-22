import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'main',
    redirect: '/index',
    component: resolve => require(['@/views/layouts/indexTpm/index.vue'], resolve),
    children: [{
      path: '/index',
      name: 'index',
      component: resolve => require(['@/views/index/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: ''
        }
      }
    }, {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/about/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: ''
        }
      }
    }]
  }]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next();
  } else {
    // if (store.state.authorization) {
    //     next();
    // } else {
    //     Modal.confirm({
    //         content: '您还没有登录，请登录',
    //         onOk() {
    //             next({
    //                 path: '/login',
    //                 query: { redirect: to.fullPath }
    //             })
    //         },
    //         onCancel() {
    //             router.replace({
    //                 path: '/'
    //             })
    //         }
    //     });
    // }
  }
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
})

export default router;
