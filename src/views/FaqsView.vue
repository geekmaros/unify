<template>
  <section
    class="faq sm:mx-10 lg:mx-140px text-center sm:border-x-2 border-unify-beige border-dashed pb-30px md:pb-206px" data-aos="fade-up"
  >
    <div class="max-w-[16.375rem] mx-auto">
      <h2
        class="text-xl text-unify-purple-300 leading-140 tracking-0.01 font-medium mt-70px relative before:content-[''] before:block before:w-10 before:h-1 before:bg-unify-beige before:absolute before:left-0 before:top-12.5px after:content-[''] after:block after:w-10 after:h-1 after:bg-unify-beige after:absolute after:right-0 after:top-12.5px"
      >
        Have Questions?
      </h2>
    </div>
    <h1 class="text-32px text-unify-dark-300 font-medium tracking-0.01 mt-3">
      FAQs
    </h1>

    <AccordionVue />

    <p class="text-unify-gray-200 leading-160 tracking-0.01 mt-78px mx-2">
      Can’t find the answers you’re looking for?
      <span class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
        Contact our support team</span
      >
    </p>
  </section>
</template>

<script>
import AccordionVue from "../components/Accordion.vue";
export default {
  components: {
    AccordionVue,
  },
};
</script>
