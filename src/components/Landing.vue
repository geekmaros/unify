<template>
  <main class="lg:pl-140px pt-11 lg:pt-93px md:pl-70px pl-3 lg:text-left " data-aos="fade-up">
    <div class="landing-container mt-6 lg:mt-0">
      <h2
        class="text-[32px] max-w-[316px] leading-[44.8px] text-center mx-auto font-semibold sm:text-[40px] sm:max-w-[500px] lg:text-400px lg:max-w-400px sm:leading-56 text-unify-primary lg:text-left lg:mx-0"
      >
        Digitalized education for the future at no extra cost
        <span
          class="bg-unify-purple-300 w-2 h-2 inline-block rounded-sm"
        ></span>
      </h2>
      <p
        class="max-w-[343px] text-center text-[16px] leading-[24.64px] text-unify-dark-200 mx-auto font-normal mt-7 sm:max-w-[400px] sm:text-[18px] lg:text-left lg:mx-0 lg:mx-0"
      >
        Imagine being able to extend your Institutions reach beyond walls, make
        admission processes easy, manage student data, organize classes remotely
        and much more, all at no extra cost.
      </p>
      <div class="flex justify-center lg:justify-start items-center mt-35px">
        <BtnVue message="Request Demo" class="shadow-btn" />
        <span class="ml-11 underline">Learn more</span>
      </div>
    </div>
    <div class="hero svg-container">
        <img src="../assets/hero.png" alt="">
    </div>
  </main>
</template>

<script setup>
import BtnVue from "./Btn.vue";
</script>

<style scoped>
main {
  display: grid;
  grid-template-rows: 1.5fr 2fr;
}

.svg-container {
  grid-area: 1/1;
}

/* @media (min-width: 640px) {

    } */
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  main {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr;
    gap: 10px;
    /* height: 80vh; */
  }
  .svg-container {
    grid-area: auto;
  }
}
@media (min-width: 1280px) {
}
@media (min-width: 1526px) {
}
</style>
