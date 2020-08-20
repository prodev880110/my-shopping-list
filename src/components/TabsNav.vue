<template>
  <div class="tabsNav">
    <router-link :to="{name: 'Home'}" class="tabsNav__tab">
      List
    </router-link>
    <router-link :to="{name: 'Add'}" class="tabsNav__tab">
      Add
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
};
</script>
