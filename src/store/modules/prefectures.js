import Vue from "vue";
import { resas } from "@/apiConfig";
import http from "../http";

const state = {
  prefectures: []
};

const mutations = {
  setPrefectures(state, payload) {
    state.prefectures = payload;
  }
};

const actions = {
  async requestPrefectures({ commit }) {
    try {
      const { data, statusCode, message } = await http.get(
        resas.prefecturesAPI
      );
      if (statusCode == 403 || statusCode == 404) {
        Vue.toasted.clear();
        Vue.toasted.info(message, {
          action: {
            text: "Cancel",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      }
      commit("setPrefectures", data.result);
    } catch (error) {
      Vue.toasted.clear();
      Vue.toasted.info(error, {
        action: {
          text: "Cancel",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
