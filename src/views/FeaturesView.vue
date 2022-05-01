<template>
  <main class="mt-11">
    <div class="text-center">
      <div class="flex items-center justify-center">
        <svg
          width="40"
          height="4"
          viewBox="0 0 40 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-3"
        >
          <rect y="0.5" width="40" height="3" fill="#F1EBE3" />
        </svg>
        <h2 class="text-unify-purple-300 font-medium text-20px leading-7">
          What we offer
        </h2>
        <svg
          width="40"
          height="4"
          viewBox="0 0 40 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-3"
        >
          <rect y="0.5" width="40" height="3" fill="#F1EBE3" />
        </svg>
      </div>
      <h3 class="text-unify-primary font-medium text-25px leading-10">
        Features
      </h3>
    </div>
    <div
      class="px-70px lg:px-140px pt-70px flex flex-col md:block items-center"
    >
      <!-- item ends here -->
      <div v-for="feature in features" :key="feature.id">
        <FeaturesCardVue
          :title="feature.title"
          :description="feature.description"
          :left="feature.left"
          :imgPath="feature.imgPath"
          class=""
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FeatureList } from "../composables/useGetFeature";
import FeaturesCardVue from "../components/FeaturesCard.vue";

const features = ref();

onMounted(async () => {
  features.value = await FeatureList();

  console.log(features);
});
</script>
