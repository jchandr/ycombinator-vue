<template>
  <div class="Home">
    <Tab></Tab>
    <NavigationTab></NavigationTab>
    <ItemList></ItemList>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Tab from './Tab';
import NavigationTab from './NavigationTab';
import ItemList from './ItemList';

export default {
  name: 'Home',
  props: [
  ],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      items: 'items',
    }),
  },
  components: {
    Tab,
    NavigationTab,
    ItemList,
    mapGetters,
  },
};
</script>

<style>

</style>
