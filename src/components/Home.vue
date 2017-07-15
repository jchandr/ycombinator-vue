<template>
  <div class="Home">
    <Tab></Tab>
    <NavigationTab></NavigationTab>
  </div>
</template>

<script>
import Tab from './Tab';
import NavigationTab from './NavigationTab';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    Tab,
    NavigationTab,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
