<template>
  <nav class="hidden md:flex items-center space-x-6">
    <router-link to="/" class="btn btn-none"> Home </router-link>
    <router-link to="/precio" class="btn btn-none"> Precios </router-link>
    <router-link to="/contacto" class="btn btn-none"> Contacto </router-link>
    <router-link to="/demos" class="btn btn-ghost"> Ver Demos </router-link>
    <router-link to="/contacto" class="btn btn-main"> Contactanos </router-link>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  .btn {
    @apply whitespace-nowrap px-4 py-2 rounded-md text-base transition duration-200;
  }
  .btn-none {
    @apply font-normal text-main-700 hover:text-main-300;
  }
  .btn-ghost {
    @apply bg-transparent text-main-300 font-bold hover:bg-main-100 hover:text-main-500 hover:shadow-sm;
  }
  .btn-main {
    @apply bg-main-800 shadow-sm text-accent font-bold hover:bg-accent-light hover:text-main-300 hover:shadow-md;
  }
</style>
