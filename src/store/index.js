import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('http://localhost:8081/api/parts')
        .then(
          result => commit('updateParts', result.data),
        )
        .catch(err => console.log(err, 'error getting parts'));
    },
    // adding robot to api cart action
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot]; // get current state cart, append cart passed to action
      return axios.post('http://localhost:8081/api/cart', cart) // post current state cart and appended cart
        .then(() => commit('addRobotToCart', robot)); // commit addRobot mutation to add
    }, // robot to current state
    // we set this action to return axios call so we can return a promise in RobotBuilder
  },
});
