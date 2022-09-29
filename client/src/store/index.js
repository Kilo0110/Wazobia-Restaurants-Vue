import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";

export default createStore({
  modules: {
    auth,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()],
});
