<template>
  <div class="tabsNav">
    <router-link :to="{name: 'Home'}" class="tabsNav__tab">
      Lista
    </router-link>
    <router-link :to="{name: 'Add'}" class="tabsNav__tab">
      Aggiungi
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
};
</script>
