<template>
  <div class="bg-unify-purple-100 px-6 py-6 rounded-lg">
    <h2 class="px-15px pt-15px pb-2 border-2 border-black inline-block rounded shadow-btn mb-4 bg-white" >{{ title }}</h2>

    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
      <p class="max-w-293px font-normal text-base leading-6">{{ content }}</p>
      <img :src="imgPath" alt="fdfd" class=" lg:w-[200px] lg:h-[184px]" />
      <!-- w-[200px] h-[184px] -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  imgPath: String,
});
</script>

<style scoped>
.every{
  grid-template-columns: 1.5fr 1fr;
}
</style>
