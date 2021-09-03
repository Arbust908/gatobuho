<template>
  <Layout :class="isDark ? 'dark' : 'light'">
    <router-view />
  </Layout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useDark, useToggle, useFavicon } from '@vueuse/core';
  import Layout from '@/layout/Default.vue';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  if (isDark) {
    toggleDark(false);
  }
  const favicon = computed(() => {
    return isDark.value ? 'icon-light.png' : 'icon-dark.png';
  });
  useFavicon(favicon);
</script>
