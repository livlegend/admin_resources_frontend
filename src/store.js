import Vue from "vue";
import Vuex from "vuex";
import ApiAdmin from "./api/_admin";
Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  files:[]
};

const getters = {
  files: (state) => {
      return state.files
  },
}

const actions = {

  files({commit}) {
    return new Promise((resolve, reject) => {
      ApiAdmin._files().then(
        (response) => {
          resolve(response);
          commit('SET_FILES',response)
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  deleteFile({commit},idFile) {
    return new Promise((resolve, reject) => {
      ApiAdmin._deleteFile(idFile).then(
        (response) => {
          resolve(response);
          commit
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  postFile({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._postFile(data).then(
        (response) => {
          resolve(response);
          commit
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  updateFile({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._updateFile(data.id, data.formData).then(
        (response) => {
          resolve(response);
          commit
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

  SET_FILES(state, files) {
    state.files = files;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
