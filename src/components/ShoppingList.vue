<template>
  <div class="shoppingList">
    <div class="shoppingList__card" v-for="item in list" :key="item.id">
      <div class="shoppingList__cardName">
        {{item.shoppingItem.name}}
        <span class="shoppingList__cardName__quantity">
          (x{{item.shoppingItem.quantity}})
        </span>
      </div>
      <div class="shoppingList__cardDepartment">
        {{item.shoppingItem.department}}
      </div>
      <div class="shoppingList__actions">
        <button class="btnPrimary delete" @click="deleteDoc(item.id)">Cancella</button>
        <button class="btnPrimary edit" @click="handleEdit(item)">Modifica</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
    list: Array,
    deleteDoc: Function,
    handleEdit: Function,
  },
};
</script>
