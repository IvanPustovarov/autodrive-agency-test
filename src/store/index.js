import { createStore } from 'vuex'
import axios from 'axios';
const URL = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/';

export default createStore({
  state: {
    isShow: false,
    callbackForm: null,
    cities: [
    {
      city_id: 1,
      name: "Москва",
      text: "Заказать в Москву"
    },
    {
      city_id: 2,
      name: "Санкт-Петербург",
      text: "Заказать в Санкт-Петербург"
    }
  ]
  },
  getters: {
  },
  mutations: {
    changeVisibilityDialog(state, show) {
      state.isShow = show;
    },
    setCallbackForm(state, payload) {
      state.callbackForm = payload;
    }
  },
  actions: {
    async submitUser({commit}, payload) {
      const result = await axios({
        method: 'post',
        url: `${URL}`,
        data: payload
      });
      commit('setCallbackForm', result.data);
    }
  },
  modules: {
  }
})
