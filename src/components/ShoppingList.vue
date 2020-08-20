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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
    list: Array,
  },
};
</script>
