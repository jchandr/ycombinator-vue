import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: { },
    users: { },
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
  },
});

export default store;
