<template>
  <div>
    <MainNav class="main-nav" />
    <main>
      <slot> Content </slot>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // import LogoLink from '@/components/LogoLink.vue';
  import MainNav from '@/components/MainNav.vue';
  import TheFooter from '@/components/TheFooter.vue';

  export default defineComponent({
    components: {
      // LogoLink,
      MainNav,
      TheFooter,
    },
  });
</script>

<style lang="scss" scoped>
  div {
    @apply bg-blueGray-100;
  }
  .main-nav {
    @apply sticky top-0 inset-x-0 z-20 backdrop-blur bg-white bg-opacity-75 border-b;
  }
</style>
