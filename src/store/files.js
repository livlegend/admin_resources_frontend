import ApiAdmin from "../api/_admin";

const state = {
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
  downloadFile({commit},url) {
    return new Promise((resolve, reject) => {
      ApiAdmin._downloadFile(url).then(
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

  SET_FILES(state, files) {
    state.files = files;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
