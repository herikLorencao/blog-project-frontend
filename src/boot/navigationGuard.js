import AuthService from 'src/services/AuthService';

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const authService = new AuthService();
    authService.findNewToken()
      .then((tokenInfo) => {
        // noinspection JSUnresolvedVariable
        if (tokenInfo && tokenInfo.access_token) {
          store.commit('login/setToken', tokenInfo.access_token);
        }
      });

    next();
  });
};
