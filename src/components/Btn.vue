<template>
  <button class="py-3 px-5 text-white bg-unify-primary rounded-lg">
    {{ message }}
  </button>
</template>

<script setup>
defineProps({
  message: String,
});
</script>
