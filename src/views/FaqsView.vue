<template>
  <section
    class="faq sm:mx-10 lg:mx-140px text-center sm:border-x-2 border-unify-beige border-dashed"
  >
    <div class=" max-w-[16.375rem] mx-auto">
        <h2
            class="text-xl text-unify-purple-300 leading-140 tracking-0.01 font-medium mt-70px relative before:content-[''] before:block before:w-10 before:h-1 before:bg-unify-beige before:absolute before:left-0 before:top-12.5px after:content-[''] after:block after:w-10 after:h-1 after:bg-unify-beige after:absolute after:right-0 after:top-12.5px"
        >
            Have Questions?
        </h2>
    </div>
    <h1 class="text-32px text-unify-dark-300 font-medium tracking-0.01 mt-3">
      FAQs
    </h1>

    <section class="accordion mt-20 md:mt-102px">
      <div
        class="accordion-item pb-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            Is there a web application for Unify?
          </h3>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.5L8 1.5L15 8.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <p
          class="answer text-unify-dark-300 mt-2.5 text-left md:leading-160 tracking-0.01"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus
          volutpat id adipiscing felis lobortis hac vitae dui. Vitae
          pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi,
          fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam.
          In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque
          et quis montes. Leo massa, elit ut ornare eget viverra tortor eget
          quisque. faucibus augu
        </p>
      </div>

      <div
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            Is Unify free?
          </h3>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
      </div>

      <div
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            Are In-person classes available?
          </h3>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>

      <div
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            What is your refund policy?
          </h3>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>

      <div
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            How does billing work?
          </h3>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>

      <div
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div class="question flex justify-between items-center cursor-pointer">
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            What do the different payment packages mean?
          </h3>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="#2F2D37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>
    </section>

    <p class="text-unify-gray-200 leading-160 tracking-0.01 mt-78px mx-2">
      Can’t find the answers you’re looking for?
      <span class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
        Contact our support team</span
      >
    </p>
  </section>

  <AccordionVue />
</template>

<script>

import AccordionVue from '../components/Accordion.vue';
export default {
  components: {
    AccordionVue
  }
}


</script>
