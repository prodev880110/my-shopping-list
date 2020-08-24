<template>
  <div class="add">
    <form class="addItemForm" @submit.prevent="addToShoppingList">
      <div class="addItemForm__inputWrapper">
        <label for="name">Nome:</label>
        <input type="text" v-model="shoppingItem.name" id="name">
        <div class="addItemForm__error" v-if="errors.nameError">{{errors.nameError}}</div>
      </div>
      <div class="addItemForm__inputWrapper">
        <label for="quantity">Quantità:</label>
        <input type="text" v-model="shoppingItem.quantity" id="quantity">
        <div class="addItemForm__error" v-if="errors.quantityError">{{errors.quantityError}}</div>
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
        <div class="addItemForm__error" 
          v-if="errors.departmentError"
        >
          {{errors.departmentError}}
        </div>
      </div>
      <div class="addItemForm__inputWrapper">
        <button class="btnPrimary" type="submit">Aggiungi alla lista 🛒</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joi from 'joi';
import departments from '../departments';

const validationSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().min(1).integer().required(),
  department: Joi.number().min(1).integer().required(),
});

export default {
  name: 'Add',
  data: () => ({
    shoppingItem: {
      name: '',
      quantity: '',
      department: null,
    },
    departments,
    errors: {
      nameError: '',
      quantityError: '',
      departmentError: '',
    },
  }),
  methods: {
    ...mapActions('shoppingList', [
      'saveDoc',
    ]),
    addToShoppingList() {
      const { name, quantity, department } = this.shoppingItem;

      const temp = {
        name,
        quantity: Number(quantity),
        department: Number(department),
      };

      const validationErrors = validationSchema.validate(temp);

      if (validationErrors.error) {
        if (validationErrors.error.details[0].path[0] === 'name') {
          this.errors.nameError = 'Campo richiesto';
        } else if (validationErrors.error.details[0].path[0] === 'quantity') {
          this.errors.quantityError = 'Campo richiesto e deve essere maggiore o uguale a 1';
        } else {
          this.errors.departmentError = 'Campo richiesto';
        }
      } else {
        this.saveDoc(temp);

        this.shoppingItem.name = '';
        this.shoppingItem.quantity = '';
        this.shoppingItem.department = null;

        this.errors.nameError = '';
        this.errors.quantityError = '';
        this.errors.departmentError = '';
      }
    },
  },
};
</script>
