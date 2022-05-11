<template>
  <div
    class="bg-backdrop w-full pb-16 px-11 lg:px-44 pt-20 absolute top-0 z-20"
    @click.self="closeModal"
  >
    <div class="bg-white p-4 rounded-lg">
      <h4 class="text-center font-medium text-32px mb-8">Unify Forms</h4>
      <div class="md:grid md:grid-cols-2 px-16 gap-3">
        <div class="">
          <h5 class="font-medium text-20px">For prospective students</h5>
          <p
            class="font-normal text-base max-w-400px mt-30px mb-30px text-unify-gray-200"
          >
            Looking to start your enrollment process? Find entry forms for all
            nursery, primary and secondary schools
          </p>
          <div class="flex items-center justify-center">
            <img src="../assets/prospective.svg" alt="" />
          </div>
          <BtnVue message="Find forms" class="mt-78px mb-12 shadow-btn" />
        </div>
        <div class="">
          <h5 class="font-medium text-20px">For institution use</h5>
          <p
            class="font-normal text-base max-w-400px mt-30px mb-30px text-unify-gray-200"
          >
            Looking to upload forms for your Nursery, Primary aand secondary
            schools? We got you covered
          </p>
          <div class="flex items-center justify-center">
            <img src="../assets/form-institution.svg" alt="" />
          </div>
          <BtnVue message="Upload forms" class="mt-78px mb-12 shadow-btn" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnVue from "./Btn.vue";

export default {
  components: {
    BtnVue,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
