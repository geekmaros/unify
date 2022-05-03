<template>
  <div class="bg-gray-50">
    <!-- <header> -->
    <div class="relative z-20 border-b lg:border-b-0 bg-white">
      <div class="p-4 md:px-70px  lg:container lg:mx-auto lg:px-10px lg:py-4">
        <div class="flex items-center justify-between">
          <div class="relative z-20">
            <router-link to="/">
              <img src="../assets/logo.svg" alt="logo-tailus" />
            </router-link>
          </div>

          <div class="flex items-center justify-end">
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              class="peer"
              hidden
            />
            <label
              for="hamburger"
              class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                class="m-auto h-0.5 w-6 rounded bg-unify-primary transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-6 rounded bg-unify-primary transition duration-300"
              ></div>
            </label>
            <!-- start -->
            <div
              class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0"
            >
              <!-- flex flex-col h-full justify-between lg:items-center lg:flex-row lg:justify-between -->
              <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row lg:justify-between">
                <ul
                  class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0"
                >
                  <li>
                    <router-link to="/"> Home </router-link>
                  </li>
                  <li>
                    <router-link to="features"> features </router-link>
                  </li>
                  <li>Products</li>
                  <li>
                    <router-link to="faqs">FAQs</router-link>
                  </li>
                </ul>

                <div
                  class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pr-0 lg:pl-6"
                >
                  <BtnVue message="Request demo" />
                </div>
              </div>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>
    </div>
    <!-- </header> -->
  </div>
</template>

<script setup>
import BtnVue from "./Btn.vue";
</script>

<style scoped>
ul a.router-link-exact-active {
  position: relative;
}
ul a.router-link-exact-active::before {
  content: "";
  position: absolute;
  top: -2px;
  background: black;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  right: -4px;
}
</style>
