<template>
  <div>
    <div class="button-block">
      <a class="button is-primary"
         @click="handlePreviousPageEvent"
         v-if="currentPage > minPage">Previous Page</a>
      <a class="button is-primary">{{ currentPage }}</a>
      <a class="button is-primary"
         @click="handleNextPageEvent"
         v-if="currentPage < maxPage">Next Page</a>
      <a class="button is-primary">Points</a>
      <a class="button is-primary">Time</a>
      <a class="button is-primary">Score</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      items: 'items',
      currentPage: 'currentPage',
      minPage: 'minPage',
      maxPage: 'maxPage',
    }),
  },
  components: {
    mapGetters,
  },
  methods: {
    ...mapMutations({
      handleNextPageEventInStore: 'handleNextPageEvent',
      handlePreviousPageEventInStore: 'handlePreviousPageEvent',
    }),
    handlePreviousPageEvent() {
      this.handlePreviousPageEventInStore();
    },
    handleNextPageEvent() {
      this.handleNextPageEventInStore();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
