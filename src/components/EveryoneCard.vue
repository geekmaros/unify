<template>
  <div class="bg-unify-purple-100 px-6 py-6 rounded-lg">
    <h2
      class="px-15px pt-15px pb-2 border-2 border-black inline-block rounded shadow-btn mb-4 bg-white"
    >
      {{ title }}
    </h2>

    <div
      class="flex flex-col md:flex-row space-x-2 lg:flex-row justify-between md:items-center"
    >
      <div class="w-full h-full flex items-center justify-center">
        <p class="lg:max-w-293px font-normal text-base leading-6">
          {{ content }}
        </p>
      </div>
      <div class="overflow-hidden rounded-lg w-full h-full mt-5 md:mt-0">
        <img :src="img" alt="fdfd" class="w-full h-full object-fit" />
      </div>
      <!-- w-[200px] h-[184px] -->
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  title: String,
  content: String,
  imgPath: String,
});

const img = computed(() => {
  return new URL(props.imgPath, import.meta.url).href;
});
</script>

<style scoped>
.every {
  grid-template-columns: 1.5fr 1fr;
}
</style>
