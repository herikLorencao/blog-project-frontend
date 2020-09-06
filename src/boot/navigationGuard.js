import AuthService from 'src/services/AuthService';
import jwt from 'jsonwebtoken';

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const token = store.getters['login/getToken'];
    const userId = store.getters['login/getUserId'];
    const adminPath = to.path !== '/admin/login' && to.path.includes('admin');
    const authService = new AuthService();
    let validJwt;

    try {
      validJwt = jwt.verify(token);
    } catch (e) {
      validJwt = false;
    }

    if (!validJwt) {
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
