<template>
  <nav
    class="p-4 lg:px-140px lg:py-15px flex items-center justify-between border-b-2 md:border-none"
  >
    <img src="../assets/logo.svg" alt="Company Logo" />
    <div class="links hidden md:flex">
      <router-link to="/">Home</router-link>
      <router-link to="about" class="ml-35px">Features</router-link>
      <span class="flex items-center ml-35px">
        <span>Products</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2"
        >
          <path
            d="M10.6663 1.66675L5.99967 6.33341L1.33301 1.66675"
            stroke="#575765"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <router-link to="faqs" class="ml-35px">FAQs</router-link>
    </div>
    <BtnVue message="Request Demo" class="hidden md:flex" />
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="md:hidden"
    >
      <path
        d="M21 7H3.00002"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 17H3.00002"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </nav>
</template>
<script setup>
import BtnVue from "./Btn.vue";
</script>

<style scoped>
nav a.router-link-exact-active {
  position: relative;
}
nav a.router-link-exact-active::before {
  content: "";
  position: absolute;
  top: -2px;
  background: black;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  right: -4px;
}
</style>
