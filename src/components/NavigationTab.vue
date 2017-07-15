<template>
  <div>
    <div class="block">
      <a class="button is-primary">Previous Page</a>
      <a class="button is-primary">Current Page</a>
      <a class="button is-primary">Next Page</a>

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
    currentPage: {
      type: Text,
      required: true,
      default: '1',
    },
  },
  data() {
    return {
    };
  },
  components: {

  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
