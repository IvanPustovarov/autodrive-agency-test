import { createStore } from 'vuex'
import axios from 'axios';
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
  },
  modules: {
  }
})
