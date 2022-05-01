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
    <div class="px-70px lg:px-140px pt-70px flex flex-col md:block items-center">
      <!-- item ends here -->
      <div v-for="feature in features" :key="feature.id">
          <FeaturesCardVue  :title="feature.title" :description="feature.description" :left="feature.left" :imgPath="feature.imgPath" class=""/>
      </div>
    </div>
</main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import FeaturesCardVue from "../components/FeaturesCard.vue";

const features = ref([
    {
        id: 1,
        title: "Robust school management system",
        description: "All users are able to effectively manage their activities from dashboards specially tailored to their needs.",
        imgPath: "../assets/landing/features/robust.png",
        left: false
    },
    {
        id: 2,
        title: "Student Id and debit card integration",
        description: "A wallet system is created for all users of the platform toward performing various financial transactions such as paying school fees, buying materials,staff salaries etc. This allows for proper financial management and tracking for students, staff, and the institution at large.",
        imgPath: "../assets/landing/features/card.png",
        left: true
    },
    {
        id: 3,
        title: "Unify student cards",
        description: "Debit cards linked to their wallets are issued to all users of the platform. These cards will be acceptable anywhere in Nigeria to make online payment, In-store Payments, ATM Withdrawals.",
        imgPath: "../assets/landing/features/student-card.png",
        left: false
    },
    {
        id: 4,
        title: "Timely Updates Through Newsletter",
        description: "Administrative staff can tailor engagement with faculty, departments,students or parents through newsletters or notifications. This allows for prompt and mass disbursement of information.",
        imgPath: "../assets/landing/features/newsletter.png",
        left: true
    },
    
])
</script>