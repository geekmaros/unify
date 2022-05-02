<template>
  <LandingVue />
  <VideoVue />
  <EveryoneVue />
  <FeaturesVue />
  <HowItWorksVue />
  <LandingFooter/>
</template>
<script setup>
// import LandingVue from './Home/Sections/Landing.vue';
// import VideoVue from './Home/Sections/Video.vue';
// import EveryoneVue from "./Home/Sections/Everyone.vue"

import LandingVue from '../components/Landing.vue';
import VideoVue from '../components/Video.vue';
import EveryoneVue from '../components/Everyone.vue';
import FeaturesVue  from '../components/Features.vue';
import HowItWorksVue from '../components/HowItWorks.vue';
import LandingFooter from "../components/LandingFooter.vue";
</script>
