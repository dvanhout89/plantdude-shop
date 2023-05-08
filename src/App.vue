<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarTop from './components/NavBarTop.vue';
import NavBarBottom from './components/NavBarBottom.vue';
</script>

<template>
  <div class="vstack gap-3 app-stack">
    <NavBarTop />
    <RouterView />
    <NavBarBottom />
  </div>
</template>

<style scoped>
.app-stack{
  background: white;
  margin: 0;
  padding: 0;
}
</style>
