<template>
  <div class="container is-fluid">
    <table class="table">
      <thead>
        <th>Post</th>
        <th>Points</th>
        <th>Time</th>
        <th>Score</th>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>
            {{ item.post }}
          </td>
          <td>
            {{ item.points }}
          </td>
          <td>
            {{ item.time }}
          </td>
          <td>
            {{ item.score }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ItemList from './ItemList';

export default {
  name: 'Item',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      items: 'items',
    }),
    itemsToDisplay() {
    },
  },
  components: {
    ItemList,
    mapGetters,
  },
  methods: {
  },
};
</script>

<style>

</style>
