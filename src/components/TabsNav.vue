<template>
  <div class="tabs-nav">
    <router-link :to="{name: 'Home'}" class="tab">
      List
    </router-link>
    <router-link :to="{name: 'Add'}" class="tab">
      Add
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
};
</script>

<style>
.tabs-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
</style>
