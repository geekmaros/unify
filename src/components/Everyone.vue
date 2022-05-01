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
          Who is Unify for
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
        Unify is for Everyone
      </h3>
    </div>
    <div
      class="grid px-14 sm:px-24 md:px-16 lg:px-140px lg:grid-cols-2 pt-70px gap-7"
    >
      <EveryoneCardVue
        v-for="cardContent in cardContents"
        :key="cardContent.id"
        :title="cardContent.title"
        :content="cardContent.content"
        :imgPath="cardContent.imgPath"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import EveryoneCardVue from "./EveryoneCard.vue";

const cardContents = ref([
  {
    id: 1,
    title: "Unify for Admin",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, semper eget tincidunt porta. Cras et eget odio ornare nulla nisl. Morbi leo neque porta sollicitudin nulla auctor semper pellentesque tincidunt. Cursus tellus neque, pretium augue. In nibh aliquam. ",
    imgPath: "../assets/landing/Adins.png",
  },
  {
    id: 2,
    title: "Unify for Lecturers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, semper eget tincidunt porta. Cras et eget odio ornare nulla nisl. Morbi leo neque porta sollicitudin nulla auctor semper pellentesque tincidunt. Cursus tellus neque, pretium augue. In nibh aliquam. ",
    imgPath: "../assets/landing/lecturers.png",
    // imgPath: function(){
    //   return new URL("../assets/landing/lecturers.png", import.meta.url)
    // }
  },
  {
    id: 3,
    title: "Unify for Students",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, semper eget tincidunt porta. Cras et eget odio ornare nulla nisl. Morbi leo neque porta sollicitudin nulla auctor semper pellentesque tincidunt. Cursus tellus neque, pretium augue. In nibh aliquam. ",
    imgPath: "../assets/landing/students.png",
  },
  {
    id: 4,
    title: "Unify for Parents",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, semper eget tincidunt porta. Cras et eget odio ornare nulla nisl. Morbi leo neque porta sollicitudin nulla auctor semper pellentesque tincidunt. Cursus tellus neque, pretium augue. In nibh aliquam. ",
    imgPath: "../assets/landing/parents.png",
  },
]);
</script>

<style></style>
