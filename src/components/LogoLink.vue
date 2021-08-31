<template>
  <router-link to="/" class="logo-link">
    <Logo class="logo" />
    <LogoMini />
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '@/components/Logo.vue';
  import LogoMini from '@/components/LogoMini.vue';
  export default defineComponent({
    components: { Logo, LogoMini },
    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  .logo-link {
    @apply flex space-x-2 items-center transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80;
  }
  .logo {
    @apply w-12;
  }
</style>
