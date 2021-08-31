<template>
  <div class="relative bg-gradient-to-b from-accent to-accent-light px-6 py-20">
    <h1 class="text-center font-serif font-bold tracking-wider">
      <span class="block text-main-800 text-5xl lg:text-7xl"
        >Sitios y Apps</span
      >
      <span class="font-serif block text-main-600 text-3xl lg:text-4xl"
        >de fantasia a medida</span
      >
    </h1>
    <p
      class="
        mt-6
        max-w-lg
        mx-auto
        text-center text-xl text-main-700
        sm:max-w-3xl
      "
    >
      Sitios full responsive, vistosos y fáciles de usar. Estaticos o
      administrables. Lijeros y con las tecnologias mas nuevas. De fantasia!
    </p>
    <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div
        class="
          space-y-4
          sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5
        "
      >
        <router-link
          to="/"
          class="
            flex
            items-center
            justify-center
            px-4
            py-3
            border border-transparent
            text-base
            font-bold
            rounded-md
            shadow-sm
            text-main-300
            bg-white
            hover:bg-main-100
            sm:px-8
          "
        >
          Ver Demos
        </router-link>
        <router-link
          to="/contacto"
          class="
            flex
            items-center
            justify-center
            px-4
            py-3
            border border-transparent
            text-base
            font-bold
            rounded-md
            shadow-sm
            text-white
            bg-main-300
            sm:px-8
            hover:bg-main-600 hover:shadow-lg
            transition
            duration-150
            ease-out
          "
        >
          Contactanos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped></style>
