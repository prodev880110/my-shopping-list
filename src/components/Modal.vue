<template>
  <div class="modalWrapper" :class="{ open: isOpen }">
    <div class="modalWrapper__overlay"></div>
    <div class="modalWrapper_modal">
      <div class="modalWrapper_modalForm">
        <form @submit.prevent="fireEditDoc(selectedItem)">
          <div class="addItemForm__inputWrapper">
            <label for="name">Nome:</label>
            <input type="text" v-model="selectedItem.name" id="name">
          </div>
          <div class="addItemForm__inputWrapper">
            <label for="quantity">Quantità:</label>
            <input type="text" v-model="selectedItem.quantity" id="quantity">
          </div>
          <div class="addItemForm__inputWrapper">
            <label for="department">Reparto:</label>
            <select v-model="selectedItem.departmentKey" id="department">
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
            <button class="btnPrimary" type="submit">Modifica 🎈</button>
            <button class="btnPrimary delete">Cancella</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    closeModal: Function,
    selectedItem: Object,
    departments: Object,
    fireEditDoc: Function,
  },
};
</script>

<style>

</style>
