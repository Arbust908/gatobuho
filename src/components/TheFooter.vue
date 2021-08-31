<template>
  <footer class="p-6 space-y-2">
    <!-- <Socials /> -->
    <!-- <SiteMap /> -->
    <Copyrights />
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // import Socials from '@/components/Socials.vue';
  // import SiteMap from '@/components/SiteMap.vue';
  import Copyrights from '@/components/Copyrights.vue';
  export default defineComponent({
    components: {
      // Socials,
      // SiteMap,
      Copyrights,
    },
  });
</script>

<style></style>
