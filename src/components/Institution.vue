<template>
  <main class="bg-unify-purple-100">
    <div class="flex flex-col justify-center items-center">
      <h2>Driving <span></span> growth in top tertiary institutions</h2>
      <img src="../assets/insti.png" alt="" />
    </div>
    <div>
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
      <img src="../assets/landing/unilag.png" alt="" />
      <img src="../assets/landing/covenant.png" alt="" />
      <img src="../assets/landing/harvard.png" alt="" />
    </div>
    <Splide :options="{ rewind: true }" :perPage="2" class="px-70px">
      <SplideSlide>
        <h1>Awesome!</h1>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius proin
          pellentesque nibh id nunc, enim, vestibulum consectetur. Nisl posuere
          aliquam sodales lobortis nunc, tellus felis ac. Fusce mattis facilisis
          est tortor ornare venenatis sagittis.”
        </p>
        <div>
          <h5>Adebayo Akinnusi</h5>
          <p>Lecturer, Harvard</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <h1>2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          molestiae aliquam necessitatibus saepe blanditiis ab vitae!
          Repellendus, consectetur at?
        </p>
      </SplideSlide>
    </Splide>

    <button></button>
  </main>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
</script>
