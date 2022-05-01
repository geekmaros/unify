<template>
  <div class="bg-white font-serif z-0">
    

    <section class="accordion mt-20 md:mt-102px">
      <div
        v-for="(question, index) in questions"
        :key="`question-${index}`"
        class="accordion-item py-6 border-b border-unify-light-stroke mx-7 sm:mx-20 lg:mx-206px max-w-[46.75rem]"
      >
        <div
          class="question flex justify-between items-center cursor-pointer"
          @click="openAccord(index)"
        >
          <h3 class="text-unify-dark-300 font-medium leading-160 tracking-0.01">
            {{ question.title }}
          </h3>
          <svg
            v-if="activeAccordion.includes(index)"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.5L8 1.5L15 8.5"
              stroke="#2F2D37"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          v-if="!activeAccordion.includes(index)"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.5L8 8.5L1 1.5"
              stroke="#2F2D37"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          v-show="activeAccordion.includes(index)"
          :class="{ collapsed: activeAccordion.includes(index) }"
          class="answer transition ease-in duration-1000 text-unify-dark-300 mt-2.5 text-left md:leading-160 tracking-0.01"
        >
          {{ question.answer }}
        </p>
      </div>
    </section>

    <!-- <section
      class="faq-content w-10/12 mx-auto pt-20 pb-20 px-0 md:px-2 lg:pl-32 lg:pr-32"
    >
      <div
        v-for="(question, index) in questions"
        :key="`question-${index}`"
        class="question-wrapper rounded-lg border border-jadekgrey700 mb-6 pt-8 pb-8 pl-10 pr-10"
      >
        <div class="top cursor-pointer" @click="openAccord(index)">
          <div class="flex justify-between w-full">
            <h1
              :class="{
                'text-jadekgreen200 font-semibold':
                  activeAccordion.includes(index),
              }"
              class="text-xl font-normal"
            >
              {{ question.title }}
            </h1>
            <button @click="openAccord(index)">
              <svg
                v-if="activeAccordion.includes(index)"
                @click="openAccord(index)"
                width="13"
                height="4"
                viewBox="0 0 13 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.75 0.4375H1.25C0.757812 0.4375 0.375 0.847656 0.375 1.3125V2.1875C0.375 2.67969 0.757812 3.0625 1.25 3.0625H11.75C12.2148 3.0625 12.625 2.67969 12.625 2.1875V1.3125C12.625 0.847656 12.2148 0.4375 11.75 0.4375Z"
                  fill="#5EB100"
                />
              </svg>

              <svg
                v-else
                width="13"
                height="13"
                @click="openAccord(index)"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.75 5.4375H7.8125V1.5C7.8125 1.03516 7.40234 0.625 6.9375 0.625H6.0625C5.57031 0.625 5.1875 1.03516 5.1875 1.5V5.4375H1.25C0.757812 5.4375 0.375 5.84766 0.375 6.3125V7.1875C0.375 7.67969 0.757812 8.0625 1.25 8.0625H5.1875V12C5.1875 12.4922 5.57031 12.875 6.0625 12.875H6.9375C7.40234 12.875 7.8125 12.4922 7.8125 12V8.0625H11.75C12.2148 8.0625 12.625 7.67969 12.625 7.1875V6.3125C12.625 5.84766 12.2148 5.4375 11.75 5.4375Z"
                  fill="#212529"
                />
              </svg>
            </button>
          </div>

          <div
            v-show="activeAccordion.includes(index)"
            :class="{ collapsed: activeAccordion.includes(index) }"
            class="answer transition ease-in duration-700 text-lg text-jadekgrey400 leading-loose mt-3"
          >
            <p>
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAccordion: [],
      questions: [
        {
          title: "Is there a web application for Unify? ",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
        },
        {
          title: "Is Unify free?",
          answer: "Yes, You can buy as much farm as your money can go",
        },
        {
          title: "Are In-person classes available?",
          answer:
            "You can recieve payment with a bank card or via net banking (if you’re in Nigeria). We will credit your account automatically at the end of every investment cycle.",
        },
        {
          title: "What is your refund policy?",
          answer:
            "You can recieve payment with a bank card or via net banking (if you’re in Nigeria). We will credit your account automatically at the end of every investment cycle.",
        },
        {
          title: "How does billing work?",
          answer:
            "You can recieve payment with a bank card or via net banking (if you’re in Nigeria). We will credit your account automatically at the end of every investment cycle.",
        },
        {
          title: "What do the different payment packages mean?",
          answer:
            "You can recieve payment with a bank card or via net banking (if you’re in Nigeria). We will credit your account automatically at the end of every investment cycle.",
        }
      ],
    };
  },
  methods: {
    openAccord(index) {
      const currentIndex = this.activeAccordion.findIndex(
        (ind) => ind === index
      );
      if (this.activeAccordion.includes(index)) {
        this.activeAccordion.splice(currentIndex, 1);
      } else {
        this.activeAccordion.splice(currentIndex, 1, index);
      }
      console.log(this.activeAccordion);
    },
  },
};
</script>

<style scoped>
.answer {
  /* height: 90px; */
  transition: height 0.4s ease-in-out;
}
.answer.collapsed {
  height: auto;
  transition: height 0.4s ease-in-out;
}
</style>
