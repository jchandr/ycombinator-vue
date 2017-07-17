import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: [
    ],
    users: { },
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
  },
  actions: {
  },
  getters: {
    items() {
      for (let i = 0; i < store.state.itemsPerPage; i += 1) {
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
  },
  methods: {
  },
});

export default store;
