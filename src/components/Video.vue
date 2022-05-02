<template>
  <main class="relative h-[60vh] sm:h-[80vh] mt-28">
    <video
      controls
      class="max-w-[343px] max-h-[221px] sm:max-w-[715px] sm:max-h-[339px] lg:max-w-[915px] lg:max-h-[439px] mx-auto absolute video"
      poster="../assets/landing/thumbnail.png"
    >
      <source src="../assets/video.mp4" type="video/mp4" />
    </video>
    <div class="h-1/2 bg-unify-beige"></div>
    <div class="h-1/2"></div>
  </main>
</template>

<style scoped>
.video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
