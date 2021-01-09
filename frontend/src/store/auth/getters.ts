import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthInterface } from './state';

const getters: GetterTree<AuthInterface, StateInterface> = {
  isLoggedIn(state) {
    return state.loggedIn;
  },
};

export default getters;
