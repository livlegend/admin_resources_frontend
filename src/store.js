import Vue from "vue";
import Vuex from "vuex";
import ApiAdmin from "./api/_admin";
Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
};

// const getters = {
//   ventes: (state) => {
//       return state.ventes
//   },
// }

const actions = {
  /**
   * Recuperer la liste des attributs possible pour un champ
   */
  postFile(data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._postFile(data).then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};
const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  set(state, [variable, value]) {
    state[variable] = value;
  },

  SET_VENTES(state, ventes) {
    state.ventes = ventes;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
