<template>
  <div class="hero">
    <h1>
      <span class="main">Sitios y Apps</span>
      <span class="second">de fantasia a medida</span>
    </h1>
    <p>
      Sitios full responsive, vistosos y fáciles de usar. Estaticos o
      administrables. Lijeros y con las tecnologias mas nuevas. De fantasia!
    </p>
    <div class="btn-box">
      <!-- <router-link to="/demos" class="btn second"> Ver Demos </router-link> -->
      <router-link to="/contacto" class="btn main"> Contactanos </router-link>
    </div>
  </div>
  <div class="hero-separator" aria-hidden="true"></div>
</template>

<style lang="scss" scoped>
  .hero {
    @apply bg-gradient-to-b from-second-200 to-main-300 px-6 py-20 h-[80vh];
    & > h1 {
      @apply text-center font-serif font-bold tracking-wider;
      & .main {
        @apply block text-main-600 text-5xl lg:text-7xl;
      }
      & .second {
        @apply block text-main-500 text-3xl lg:text-4xl;
      }
    }
    & > p {
      @apply mt-6 max-w-lg mx-auto text-center text-xl text-second-700 sm:max-w-3xl;
    }
    .btn-box {
      @apply mt-10 max-w-xs mx-auto grid sm:grid-cols-1 gap-5;
      & .btn {
        @apply flex items-center justify-center px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm sm:px-8 hover:shadow-lg transition duration-300 hover:animate-boing;
      }
      & .second {
        @apply text-accent-500 bg-white hover:bg-accent-300 hover:text-accent-700;
      }
      & .main {
        @apply text-white bg-accent-500 hover:bg-accent-700;
      }
    }
  }
  .hero-separator {
    @apply bg-gradient-to-b from-main-300 to-second-100 px-6 h-[20vh];
  }
</style>
