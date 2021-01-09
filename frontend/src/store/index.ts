import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import example from './module-example';
import { ExampleStateInterface } from './module-example/state';

import authModule from './auth';
import { AuthInterface } from './auth/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  example: ExampleStateInterface;
  authModule: AuthInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: unknown;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      example,
      authModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});
