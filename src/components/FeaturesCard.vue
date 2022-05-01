<template>
  <div class="grid grid-row-2 md:grid-cols-2 gap-2 mt-7 items-center">
    <div
      class="max-w-[347px] max-h-[347px] lg:max-w-[468px] lg:max-h-[468px] bg-[#ECE7DF] rounded-full overflow-hidden flex justify-center items-center"
      :class="left ? 'left' : ''"
    >
      <div
        class="py-3 px-3 bg-[#EBEBEB] inline-block rounded-[22.43px] mt-140px max-w-[256px] max-h-[256px] lg:max-w-[322px] lg:max-h-[322px]"
      >
        <img :src="img" alt="" class="" />
      </div>
    </div>
    <div>
      <h1
        class="text-unify-primary w-[312px] text-center md:text-left md:w-[340px] text-20px leading-7 font-medium mt-3 md:mt-0"
      >
        {{ title }}
      </h1>
      <p
        class="mt-35px text-[16px] w-[325px] text-center md:text-left md:max-w-400px md:text-[20px] leading-7 text-unify-dark-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  imgPath: String,
  title: String,
  description: String,
  left: Boolean,
});

const img = computed(() => {
  return new URL(props.imgPath, import.meta.url);
});
</script>

<style scoped>
@media (min-width: 768px) {
  .left {
    grid-area: 1/2;
  }
}
</style>
