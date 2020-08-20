<template>
  <div class="home">
    <ShoppingList :list="list" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ShoppingList from '../components/ShoppingList.vue';

export default {
  name: 'Home',
  components: {
    ShoppingList,
  },
  computed: {
    ...mapState('shoppingList', [
      'list',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('shoppingList', [
      'getData',
    ]),
  },
  mounted() {
    this.getData();
  },
};
</script>
