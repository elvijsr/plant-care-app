import { MutationTree } from 'vuex';
import { AuthInterface, UserInterface } from './state';

const mutation: MutationTree<AuthInterface> = {
  loginSuccess(state: AuthInterface, user: UserInterface) {
    state.loggedIn = true;
    state.user = user;
  },
  loginFailure(state: AuthInterface) {
    state.loggedIn = false;
    state.user = null;
  },
  logout(state: AuthInterface) {
    state.loggedIn = false;
    state.user = null;
  },
};

export default mutation;
