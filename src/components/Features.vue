<template>
  <main class="bg-unify-beige py-70px mt-70px">
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
          <rect y="0.5" width="40" height="3" fill="#FAFAFA" />
        </svg>
        <h2 class="text-unify-purple-300 font-medium text-20px leading-7">
          Features
        </h2>
        <svg
          width="40"
          height="4"
          viewBox="0 0 40 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-3"
        >
          <rect y="0.5" width="40" height="3" fill="#FAFAFA" />
        </svg>
      </div>
      <h3 class="text-unify-primary font-medium text-25px leading-10">
        What we offer
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
    <div class="text-center mt-30px">
      <router-link to="features" class="flex items-center justify-center">
        <span>View more Features</span>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-4"
        >
          <path
            d="M15.75 7.72559L0.75 7.72559"
            stroke="#1B1B22"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
            stroke="#1B1B22"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></router-link>
    </div>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import FeaturesCardVue from "./FeaturesCard.vue";

const features = ref([
  {
    id: 1,
    title: "Robust school management system",
    description:
      "All users are able to effectively manage their activities from dashboards specially tailored to their needs.",
    imgPath: "../assets/robust.png",
    left: false,
  },
  {
    id: 2,
    title: "Student Id and debit card integration",
    description:
      "A wallet system is created for all users of the platform toward performing various financial transactions such as paying school fees, buying materials,staff salaries etc. This allows for proper financial management and tracking for students, staff, and the institution at large.",
    imgPath: "../assets/card.png",
    left: true,
  },
  {
    id: 3,
    title: "Unify student cards",
    description:
      "Debit cards linked to their wallets are issued to all users of the platform. These cards will be acceptable anywhere in Nigeria to make online payment, In-store Payments, ATM Withdrawals.",
    imgPath: "../assets/student-card.png",
    left: false,
  },
  {
    id: 4,
    title: "Timely Updates Through Newsletter",
    description:
      "Administrative staff can tailor engagement with faculty, departments,students or parents through newsletters or notifications. This allows for prompt and mass disbursement of information.",
    imgPath: "../assets/newsletter.png",
    left: true,
  },
]);
</script>

<style scoped></style>

