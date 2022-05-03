
<template>
  <NavbarVue />
  <RouterView />
  <LandingFooterVue />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import LandingFooterVue from './components/LandingFooter.vue';
</script>

<style lang="scss">

</style>
