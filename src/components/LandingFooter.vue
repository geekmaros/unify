<template>
  <section
    class="font-sans relative footer-section px-8 md:px-10 pt-10 lg:pt-104px pb-93px lg:px-140px bg-unify-purple-400"
  >
    <div>
      <span class="footer-title font-medium leading-[48px] text-2xl text-white">
        Get the app!
      </span>
      <div class="app-icons flex items-center space-x-5 mt-5 md:mt-35px">
        <span>
          <img src="../assets/apple.png" alt="">
        </span>
        <span>
          <img src="../assets/google.png" alt="">
        </span>
      </div>
    </div>

    <img
      class="md:absolute mx-auto mt-5 right-0 md:-mt-52 lg:-mt-80 lg:mr-16 md:w lg:w-auto w-8/12 md:w-6/12"
      src="../assets/footerhero.png"
      alt=""
    />

    <div
      class="footer-nav mt-20 space-y-5 md:space-y-0 md:mt-32 lg:pt-321px flex flex-col md:flex-row justify-between"
    >
      <div class="logo-section">
        <a href="#"
          ><svg
            width="96"
            height="35"
            viewBox="0 0 96 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.624 3.664V17.488C4.624 19.0027 5.01867 20.1653 5.808 20.976C6.59733 21.7653 7.70667 22.16 9.136 22.16C10.5867 22.16 11.7067 21.7653 12.496 20.976C13.2853 20.1653 13.68 19.0027 13.68 17.488V3.664H18.192V17.456C18.192 19.3547 17.776 20.9653 16.944 22.288C16.1333 23.5893 15.0347 24.5707 13.648 25.232C12.2827 25.8933 10.7573 26.224 9.072 26.224C7.408 26.224 5.89333 25.8933 4.528 25.232C3.184 24.5707 2.11733 23.5893 1.328 22.288C0.538667 20.9653 0.144 19.3547 0.144 17.456V3.664H4.624ZM32.3445 8.016C34.4565 8.016 36.1632 8.688 37.4645 10.032C38.7658 11.3547 39.4165 13.2107 39.4165 15.6V26H34.9365V16.208C34.9365 14.8 34.5845 13.7227 33.8805 12.976C33.1765 12.208 32.2165 11.824 31.0005 11.824C29.7632 11.824 28.7818 12.208 28.0565 12.976C27.3525 13.7227 27.0005 14.8 27.0005 16.208V26H22.5205V8.272H27.0005V10.48C27.5978 9.712 28.3552 9.11467 29.2725 8.688C30.2112 8.24 31.2352 8.016 32.3445 8.016ZM45.9488 6.16C45.1594 6.16 44.4981 5.91467 43.9648 5.424C43.4528 4.912 43.1968 4.28267 43.1968 3.536C43.1968 2.78933 43.4528 2.17067 43.9648 1.68C44.4981 1.168 45.1594 0.911999 45.9488 0.911999C46.7381 0.911999 47.3888 1.168 47.9008 1.68C48.4341 2.17067 48.7008 2.78933 48.7008 3.536C48.7008 4.28267 48.4341 4.912 47.9008 5.424C47.3888 5.91467 46.7381 6.16 45.9488 6.16ZM48.1568 8.272V26H43.6768V8.272H48.1568ZM60.711 11.952H57.607V26H53.063V11.952H51.047V8.272H53.063V7.376C53.063 5.2 53.6817 3.6 54.919 2.576C56.1563 1.552 58.023 1.072 60.519 1.136V4.912C59.431 4.89067 58.6737 5.072 58.247 5.456C57.8203 5.84 57.607 6.53333 57.607 7.536V8.272H60.711V11.952ZM80.5743 8.272L69.5983 34.384H64.8303L68.6703 25.552L61.5663 8.272H66.5903L71.1663 20.656L75.8063 8.272H80.5743Z"
              fill="white"
            />
            <path
              d="M86.44 6.02V7.15H84.58V13H83.18V7.15H81.32V6.02H86.44ZM95.0715 6.02V13H93.6715V8.46L91.8015 13H90.7415L88.8615 8.46V13H87.4615V6.02H89.0515L91.2715 11.21L93.4915 6.02H95.0715Z"
              fill="white"
            />
          </svg>
        </a>
        <p class="text-base mt-8 text-white mt-[28px]">Enabling the future</p>

        <p class="text-base mt-8 text-white mt-10 md:mt-104px">
          Join our Community
        </p>
        <div
          class="input-wrapper mt-30px max-w-388px flex justify-between space-x-2 items-center rounded-lg pl-4 py-2 pr-2 border border-unify-input-box"
        >
          <input
            class="h-full bg-unify-purple-400 focus:outline-none focus:ring-0 h-[25px] w-full text-unify-gray-300"
            type="text"
            placeholder="Enter Your email"
          />
          <button
            class="text-white border-2 border-white rounded-md text-base px-4 py-2"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>

      <div class="links">
        <h3 class="text-white font-medium tracking-0.01 leading-150">Links</h3>

        <div class="links-nav mt-30px">
          <router-link
            class="leading-150 block mb-5 hover:text-white tracking-0.01 text-unify-pink-100"
            to="#"
            >Request a demo</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="#"
            >Downlaod the app</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="#"
            >Features</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="#"
            >Certifications by Unify</router-link
          >
          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="#"
            >Unify forms</router-link
          >
        </div>
      </div>

      <div class="About">
        <h3 class="text-white font-medium tracking-0.01 leading-150">About</h3>

        <div class="about-nav mt-30px">
          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="/about"
            >About us</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="/faqs"
            >FAQs</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="/privacy_policy"
            >Terms & Conditions</router-link
          >

          <router-link
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            to="/privacy_policy"
            >Privacy policy</router-link
          >
        </div>
      </div>

      <div class="Social">
        <h3 class="text-white font-medium tracking-0.01 leading-150">Social</h3>

        <div class="about-nav mt-30px">
          <a
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            href="#"
            >Instagram</a
          >

          <a
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            href="#"
            >Facebook</a
          >

          <a
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            href="#"
            >Twitter</a
          >

          <a
            class="leading-150 mb-5 block hover:text-white tracking-0.01 text-unify-pink-100"
            href="#"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingFooter",
};
</script>
<script setup>
// // import { ImageList } from "../composables/useGetImages";
// import { onMounted, ref } from "vue";
// // eslint-disable-next-line vue/multi-word-component-names
// const image = ref();
// onMounted(async () => {
//   const images = await ImageList();
//   image.value = images[0].img;
// });
</script>

<style scoped></style>
