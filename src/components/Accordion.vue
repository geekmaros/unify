<template>
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
          <h3 class="text-jost text-unify-dark-300 font-medium leading-160 tracking-0.01">
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
          :class="{ collapsed: activeAccordion.includes(index) }"
          class="answer transition ease-in duration-1000 text-unify-dark-300 mt-2.5 text-left md:leading-160 tracking-0.01"
        >
          {{ question.answer }}
        </p>
      </div>
    </section>

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
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
        },
        {
          title: "Are In-person classes available?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
        },
        {
          title: "What is your refund policy?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
        },
        {
          title: "How does billing work?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
        },
        {
          title: "What do the different payment packages mean?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque. faucibus augu",
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
  display: none;
  transition: all 0.4s ease-in-out;
}
.answer.collapsed {
  display: block;
  transition: all 0.4s ease-in-out;
}
</style>
