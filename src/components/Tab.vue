<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="item in listItems"><a>{{ item }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tab',
  data() {
    return {
      listItems: [
        'Top',
        'New',
        'Show',
        'Ask',
      ],
    };
  },
};
</script>

<style>

  .tabs{
    background: #42b983;
  }

</style>
