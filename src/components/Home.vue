<template>
  <div class="Home">
    <Tab></Tab>
    <NavigationTab></NavigationTab>
    <ItemList></ItemList>
  </div>
</template>

<script>
import Tab from './Tab';
import NavigationTab from './NavigationTab';
import ItemList from './ItemList';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    Tab,
    NavigationTab,
    ItemList,
  },
};
</script>

<style>

</style>
