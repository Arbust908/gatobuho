<template>
  <div>
    <Hero />
    <!-- <LogoCloud /> -->
    <Separator />
    <Demos />
    <Features />
    <!-- <Stats /> -->
    <SeparatorTwo />
    <CTA />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Hero from '@/components/home/Hero.vue';
  import Separator from '@/components/home/Separator.vue';
  // import LogoCloud from '@/components/home/LogoCloud.vue';
  import Demos from '@/components/home/Demos.vue';
  import Features from '@/components/home/Features.vue';
  // import Stats from '@/components/home/Stats.vue';
  import SeparatorTwo from '@/components/home/SeparatorTwo.vue';
  import CTA from '@/components/home/CTA.vue';

  export default defineComponent({
    components: {
      Hero,
      Separator,
      // LogoCloud,
      Demos,
      Features,
      // Stats,
      SeparatorTwo,
      CTA,
    },
  });
</script>

<style lang="scss" scoped></style>
