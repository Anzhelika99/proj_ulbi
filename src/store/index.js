import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 2,
    isAuth: false,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    incrementLikes(state) {
      state.likes += 1
    },
    decrimentLikes(state) {
      state.likes -= 1;
    },
  },
});