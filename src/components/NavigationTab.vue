<template>
  <div>
    <div class="button-block">
      <a class="button is-primary" @click="handlePreviousPageEvent" v-if="currentPage > minPage">Previous Page</a>
      <a class="button is-primary">{{ currentPage }}</a>
      <a class="button is-primary" @click="handleNextPageEvent" v-if="currentPage < maxPage">Next Page</a>
      <a class="button is-primary">Marks</a>
      <a class="button is-primary">Time</a>
      <a class="button is-primary">Score</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
  },
  data() {
    return {
      currentPage: 1,
      prevEnabled: true,
      nextEnabled: true,
      minPage: 1,
      maxPage: 26,
    };
  },
  computed: {
  },
  components: {
  },
  methods: {
    handlePreviousPageEvent() {
      if (this.currentPage !== 1) {
        this.currentPage -= 1;
      }
    },
    handleNextPageEvent() {
      if (this.currentPage !== 26) {
        this.currentPage += 1;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
