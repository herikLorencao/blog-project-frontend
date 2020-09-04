import Vue from 'vue';
import Vuex from 'vuex';

import login from './login';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// eslint-disable-next-line import/no-mutable-exports
let Store = null;

export default function (/* { ssrContext } */) {
  Store = new Vuex.Store({
    modules: {
      login,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}

export { Store };
