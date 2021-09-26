import ApiAdmin from "../api/_admin";

const state = {
  html_code:[]
};

const getters = {
    htmlCode: (state) => {
      return state.html_code
  },
}

const actions = {

    htmlSnippets({commit}) {
    return new Promise((resolve, reject) => {
      ApiAdmin._htmlSnippets().then(
        (response) => {
          resolve(response);
          commit('SET_CODES',response)
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  deleteHtmlSnippet({commit},id) {
    return new Promise((resolve, reject) => {
      ApiAdmin._deleteHtmlSnippet(id).then(
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

  postHtmlSnippets({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._postHtmlSnippets(data).then(
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

  updateHtmlSnippets({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._updateHtmlSnippets(data.id, data.datas).then(
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

  SET_CODES(state, html) {
    state.html_code = html;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
