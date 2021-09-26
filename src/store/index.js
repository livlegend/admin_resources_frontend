import Vue from "vue";
import Vuex from "vuex";
import file from "./files";
import htmlSnippet from "./htmlSnippets";
import link from "./links";

Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
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
    modules: {
      file,
      htmlSnippet,
      link
  },
  state,
  mutations
});
