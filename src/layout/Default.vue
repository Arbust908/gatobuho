<template>
  <div>
    <MainNav />
    <main>
      <slot> Content </slot>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // import LogoLink from '@/components/LogoLink.vue';
  import MainNav from '@/components/nav/MainNav.vue';
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
    @appl min-h-screen flex flex-col;
  }
  main {
    @apply flex-1;
  }
</style>
