import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: {},
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
  },
});
