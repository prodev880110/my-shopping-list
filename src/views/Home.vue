<template>
  <div class="home">
    <Modal
      :isOpen="isOpen"
      :closeModal="closeModal"
      :selectedItem="currentEditItem"
      :departments="departments"
      :fireEditDoc="fireEditDoc"
    />
    <div class="empty" v-if="list.length === 0">
      Nessun prodotto aggiunto 😵
    </div>
    <ShoppingList :list="list" :deleteDoc="deleteDoc" :handleEdit="handleEdit" v-else />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ShoppingList from '../components/ShoppingList.vue';
import Modal from '../components/Modal.vue';

import departments from '../departments';

export default {
  name: 'Home',
  components: {
    ShoppingList,
    Modal,
  },
  computed: {
    ...mapState('shoppingList', [
      'list',
      'isLoading',
    ]),
  },
  data: () => ({
    isOpen: false,
    currentEditItem: {},
    departments,
  }),
  methods: {
    ...mapActions('shoppingList', [
      'getDocs',
      'deleteDoc',
      'editDoc',
    ]),
    closeModal() {
      this.isOpen = false;
    },
    handleEdit(item) {
      const { id, shoppingItem: { name, quantity, department } } = item;

      const departmentKey = Object.keys(this.departments).find(
        (key) => this.departments[key] === department,
      );

      this.currentEditItem = {
        id,
        name,
        quantity,
        departmentKey,
      };
      this.isOpen = true;
    },
    fireEditDoc(item) {
      // eslint-disable-next-line no-restricted-globals
      if ((item.name !== '') && (!isNaN(Number(item.quantity))) && (!isNaN(Number(item.departmentKey)))) {
        this.isOpen = false;
        this.editDoc(item);
      }
    },
  },
  mounted() {
    this.getDocs();
  },
};
</script>
