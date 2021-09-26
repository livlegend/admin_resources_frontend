import ApiAdmin from "../api/_admin";

const state = {
  links:[]
};

const getters = {
    links: (state) => {
      return state.links
  },
}

const actions = {

    links({commit}) {
    return new Promise((resolve, reject) => {
      ApiAdmin._links().then(
        (response) => {
          resolve(response);
          commit('SET_LINK',response)
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  deleteLink({commit},id) {
    return new Promise((resolve, reject) => {
      ApiAdmin._deleteLink(id).then(
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

  postLinks({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._postLinks(data).then(
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

  updateLinks({commit},data) {
    return new Promise((resolve, reject) => {
      ApiAdmin._updateLink(data.id, data.datas).then(
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

  SET_LINK(state, links) {
    state.links = links;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
