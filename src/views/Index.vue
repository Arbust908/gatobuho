<template>
  <div>
    <Hero />
    <!-- <LogoCloud /> -->
    <Demos />
    <Features />
    <!-- <Stats /> -->
    <CTA />
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Hero from '@/components/home/Hero.vue';
  // import LogoCloud from '@/components/home/LogoCloud.vue';
  import Demos from '@/components/home/Demos.vue';
  import Features from '@/components/home/Features.vue';
  // import Stats from '@/components/home/Stats.vue';
  import CTA from '@/components/home/CTA.vue';
</script>

<style lang="scss" scoped></style>
