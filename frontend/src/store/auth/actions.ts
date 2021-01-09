import axios from 'axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthInterface, UserInterface } from './state';

const actions: ActionTree<AuthInterface, StateInterface> = {
  login({ commit }, userPayload: any): Promise<any> {
    return axios.post('/dj-rest-auth', userPayload)
      .then((response) => {
        localStorage.setItem('auth_token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        commit('loginSuccess', response.data.user);
      })
      .catch((err) => {
        localStorage.removeItem('user');
        console.log(err);
      });
  },
};

export default actions;
