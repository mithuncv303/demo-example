import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    data: null,
    error: null,
    sharedData: ''
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setError(state, error) {
      state.error = error;
    },
    setSharedData(state, newValue) {
      state.sharedData = newValue;
      console.log(state.sharedData)
    }
  },
  actions: {
    async fetchData({ commit }) {
      console.log("lili")
      await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          console.log(response.data)
          commit('setData', response.data);
        })
        .catch(error => {
          commit('setError', error.message);
        });
    },
    updateSharedData({commit}, data){
      commit('setSharedData',data)
    }
  },
  getters: {
    getData: state => state.data,
    getError: state => state.error
  }
});
