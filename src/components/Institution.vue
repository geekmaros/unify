<template>
  <main class="bg-unify-purple-100 pt-70px">
    <div class="items-center relative">
      <h2 class="text-32px font-medium text-unify-primary text-center">
        Driving growth in top tertiary institutions
      </h2>
    </div>
    <div
      class=" grid grid-cols-3 md:px-[100px] lg:px-[188px] md:flex items-center justify-between mt-[60px] mb-[75px]"
    >
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
      <img src="../assets/landing/unilag.png" alt="" />
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
    </div>
    <Splide class="pl-30px pr-30px md:pr-0 md:pl-70px lg:pl-140px pb-140px" :hasTrack="false" :options="options">
      <SplideTrack>
        <SplideSlide
          class="border-2 border-black shadow-parents rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
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
          class="border-2 border-black shadow-parents rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
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
          class="border-2 border-black shadow-parents rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
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
          class="border-2 border-black shadow-parents rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
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
          class="border-2 border-black shadow-parents rounded max-w-[439px] pt-[32px] pb-[15px] px-30px flex flex-col mr-[40px]"
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

    <button></button>
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
