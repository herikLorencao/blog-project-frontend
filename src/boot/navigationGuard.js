import AuthService from 'src/services/AuthService';

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const token = store.getters['login/getToken'];
    const userId = store.getters['login/getUserId'];
    const adminPath = to.path !== '/admin/login' && to.path.includes('admin');
    const authService = new AuthService();

    if (!token) {
      authService.findNewToken().then((tokenInfo) => {
        if (tokenInfo) store.commit('login/setToken', tokenInfo);
      });
    }

    if (!userId && adminPath) {
      next('/admin/login');
    }

    next();
  });
};
