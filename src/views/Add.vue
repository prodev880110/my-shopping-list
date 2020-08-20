<template>
  <div class="add">
    <form class="addItemForm" @submit.prevent="addToShoppingList">
      <div class="addItemForm__inputWrapper">
        <label for="name">Nome:</label>
        <input type="text" v-model="shoppingItem.name" id="name">
      </div>
      <div class="addItemForm__inputWrapper">
        <label for="quantity">Quantità:</label>
        <input type="text" v-model="shoppingItem.quantity" id="quantity">
      </div>
      <div class="addItemForm__inputWrapper">
        <label for="department">Reparto:</label>
        <select v-model="shoppingItem.department" id="department">
          <option
            :value="index"
            v-for="(department, index) in departments"
            :key="index"
          >
            {{department}}
          </option>
        </select>
      </div>
      <div class="addItemForm__inputWrapper">
        <button class="btnPrimary" type="submit">Aggiungi alla lista 🛒</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import departments from '../departments';

export default {
  name: 'Add',
  data: () => ({
    shoppingItem: {
      name: '',
      quantity: null,
      department: null,
    },
    departments,
  }),
  methods: {
    ...mapActions('shoppingList', [
      'saveDoc',
    ]),
    addToShoppingList() {
      const { name, quantity, department } = this.shoppingItem;

      // eslint-disable-next-line no-restricted-globals
      if ((name !== '') && (!isNaN(Number(quantity))) && (!isNaN(Number(department)))) {
        const temp = {
          name,
          quantity: Number(quantity),
          department: Number(department),
        };
        this.saveDoc(temp);
        // console.log(temp);
      } else {
        console.log('Error');
      }
    },
  },
};
</script>
