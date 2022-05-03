
<template>
  <!-- <NavbarVue /> -->
  <BarNavVue />
  <RouterView />
  <LandingFooterVue />
</template>

<script setup>
import { RouterView } from 'vue-router'
// import NavbarVue from './components/Navbar.vue';
import BarNavVue from './components/BarNav.vue';
import LandingFooterVue from './components/LandingFooter.vue';
</script>

<style lang="scss">

</style>
