<template>
  <main class="bg-unify-purple-100 pt-70px">
    <div class="">
      <h2
        class="text-32px font-medium text-unify-primary text-center"
        data-aos="fade-up"
      >
        Driving <span class="over">growth</span> in top tertiary institutions
        <!-- <span class="flex flex-col items-center mx-2">
          <span>growth</span>
          <span><img src="../assets/growth.svg" alt="" /></span
        ></span> -->
      </h2>
    </div>
    <div
      class=" hidden px-70px lg:px-[188px] md:flex items-center md:justify-between mt-[60px] mb-[75px]"
      data-aos="fade-up"
    >
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
      <img src="../assets/landing/unilag.png" alt="" />
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
      <img src="../assets/landing/unilag.png" alt="" />
    </div>

    <Splide class="flex items-center justify-center md:hidden" :hasTrack="false"
      :options="options"
      data-aos="fade-up">
      <SplideTrack>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/covenant.png" alt="" />
        </SplideSlide>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/harvard.png" alt="" />
        </SplideSlide>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/unilag.png" alt="" />
        </SplideSlide>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/covenant.png" alt="" />
        </SplideSlide>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/harvard.png" alt="" />
        </SplideSlide>
        <SplideSlide class="flex items-center justify-center">
          <img src="../assets/landing/unilag.png" alt="" />
        </SplideSlide>
      </SplideTrack>
    </Splide>

    <Splide
      class="pl-30px pr-30px md:pr-0 md:pl-70px lg:pl-140px pb-140px"
      :hasTrack="false"
      :options="options"
      data-aos="fade-up"
    >
      <SplideTrack class="py-4">
        <SplideSlide
          class="border-2 bg-white border-black shadow-test1 rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
        >
          <h1 class="text-[20px] mb-[28px]">Awesome!</h1>
          <p class="max-w-[350px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            proin pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl
            posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis
            facilisis est tortor ornare venenatis sagittis.”
          </p>
          <div class="ml-auto mt-7">
            <h5 class="font-medium">Adebayo Akinnusi</h5>
            <p>Lecturer, Harvard</p>
          </div>
        </SplideSlide>
        <SplideSlide
          class="border-2 bg-white border-black shadow-test2 rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
        >
          <h1 class="text-[20px] mb-[28px]">Awesome!</h1>
          <p class="max-w-[350px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            proin pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl
            posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis
            facilisis est tortor ornare venenatis sagittis.”
          </p>
          <div class="ml-auto mt-7">
            <h5 class="font-medium">Adebayo Akinnusi</h5>
            <p>Lecturer, Harvard</p>
          </div>
        </SplideSlide>
        <SplideSlide
          class="border-2 bg-white border-black shadow-test3 rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
        >
          <h1 class="text-[20px] mb-[28px]">Awesome!</h1>
          <p class="max-w-[350px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            proin pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl
            posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis
            facilisis est tortor ornare venenatis sagittis.”
          </p>
          <div class="ml-auto mt-7">
            <h5 class="font-medium">Adebayo Akinnusi</h5>
            <p>Lecturer, Harvard</p>
          </div>
        </SplideSlide>
        <SplideSlide
          class="border-2 bg-white border-black shadow-test1 rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
        >
          <h1 class="text-[20px] mb-[28px]">Awesome!</h1>
          <p class="max-w-[350px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            proin pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl
            posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis
            facilisis est tortor ornare venenatis sagittis.”
          </p>
          <div class="ml-auto mt-7">
            <h5 class="font-medium">Adebayo Akinnusi</h5>
            <p>Lecturer, Harvard</p>
          </div>
        </SplideSlide>
        <SplideSlide
          class="border-2 bg-white border-black shadow-test2 rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
        >
          <h1 class="text-[20px] mb-[28px]">Awesome!</h1>
          <p class="max-w-[350px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            proin pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl
            posuere aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis
            facilisis est tortor ornare venenatis sagittis.”
          </p>
          <div class="ml-auto mt-7">
            <h5 class="font-medium">Adebayo Akinnusi</h5>
            <p>Lecturer, Harvard</p>
          </div>
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows justify-center flex mt-[48px]">
        <button
          class="splide__arrow--prev bg-slate-500 rounded-[100%] w-[39px] h-[39px] flex items-center justify-center hover:bg-slate-400 cursor-pointer"
        >
          <img src="../assets/left.svg" alt="" />
        </button>
        <button
          class="splide__arrow--next ml-[14px] bg-slate-500 rounded-[100%] w-[39px] h-[39px] flex items-center justify-center hover:bg-slate-400 cursor-pointer"
        >
          <img src="../assets/right.svg" alt="" />
        </button>
      </div>
    </Splide>
  </main>
</template>

<script setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const options = {
  type: "loop",
  rewind: true,
  gap: "40px",
  pagination: false,
};
</script>

<style scoped>


.over {
  display: inline-block;
  position: relative;
}
.over:before {
  content: url("../assets/growth.svg");  
  width: 100%;
  position: absolute;
  bottom: -30px;
  left: -1px;
  overflow: hidden;
}
</style>
