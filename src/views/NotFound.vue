<template>
  <div class="forest">
    <h1
      class="
        font-serif
        uppercase
        text-3xl text-main-500
        font-bold
        tracking-wider
      "
    >
      Pagina no encontrada
    </h1>
    <div class="relative w-7/12 mx-auto my-6">
      <Logo
        class="absolute w-full max-h-[50vh] blur-md opacity-75 animate-pulse"
      />
      <Logo class="relative w-full max-h-[50vh]" />
    </div>
    <p class="text-second-500">
      Parece que te perdiste y llegaste a este espacio oscuro del bosque.
      <router-link to="/" class="text-main-600 hover:text-main-400">
        Salir del bosque.</router-link
      >
    </p>
  </div>
</template>

<script lang="ts" setup>
  import Logo from '@/components/Logo.vue';
</script>

<style scoped>
  h1 {
    margin-bottom: 0;
  }
  .forest {
    height: calc(100vh - 96px - 88px);
    @apply w-full px-4 text-center flex flex-col justify-center items-center bg-second-200;
  }
</style>
