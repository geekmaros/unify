<template>
  <div @click.self="closeModal" class="top-0 fixed bg-backdrop w-full h-full">
    <div class="modal w-3/4 bg-white rounded-lg mx-auto mt-28 px-16 pt-12">
    <h1 class="text-center font-medium text-32px leading-10  mb-78px ">Unify Forms</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style></style>
