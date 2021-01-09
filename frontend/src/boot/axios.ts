import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  axios.defaults.baseURL = process.env.API_URL;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axios;

  // if auth token present on startup, adding it to request header automatically
  const token = localStorage.getItem('auth_token');
  if (token) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
});
