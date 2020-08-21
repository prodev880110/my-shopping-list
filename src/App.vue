<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <TabsNav />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TabsNav from './components/TabsNav.vue';

export default {
  name: 'App',
  components: {
    Header,
    TabsNav,
  },
};
</script>
