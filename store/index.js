import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: [],
    users: {},
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
    currentPage: 1,
    prevEnabled: true,
    nextEnabled: true,
    minPage: 1,
    maxPage: 25,
  },
  actions: {},
  getters: {
    items() {
      for (let i = 0; i < store.state.itemsPerPage * 25; i += 1) {
        store.state.items.push({
          id: i,
          post: faker.lorem.sentences(),
          points: faker.random.number() % 500,
          time: faker.date.past().toString(),
          score: faker.random.number() % 100,
        });
      }
      return store.state.items;
    },
    currentPage() {
      return store.state.currentPage;
    },
    minPage() {
      return store.state.minPage;
    },
    maxPage() {
      return store.state.maxPage;
    },
    prevEnabled() {
      return store.state.prevEnabled;
    },
    nextEnabled() {
      return store.state.nextEnabled;
    },
  },

  mutations: {
    handleNextPageEvent() {
      if (store.state.currentPage !== store.state.maxPage) {
        store.state.currentPage += 1;
      }
    },
    handlePreviousPageEvent() {
      if (store.state.currentPage !== store.state.minPage) {
        store.state.currentPage -= 1;
      }
    },
  },
});

export default store;
