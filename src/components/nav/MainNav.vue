<template>
  <header>
    <div class="relative">
      <div
        class="
          flex
          justify-between
          items-center
          max-w-7xl
          mx-auto
          px-4
          py-6
          sm:px-6
          md:justify-start md:space-x-10
          lg:px-8
        "
      >
        <div
          class="
            flex
            justify-start
            lg:w-0 lg:flex-1
            font-black font-serif
            text-4xl
            relative
          "
        >
          <LogoLink />
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="
              bg-second-200
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-main-600
              hover:text-main-400 hover:bg-second-300
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
            aria-expanded="false"
            @click="openMenu"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <DesktopMenu />
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-75 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="isMenuOpen"
          class="
            absolute
            z-30
            top-0
            inset-x-0
            p-2
            transition
            transform
            origin-top-right
            md:hidden
          "
        >
          <div
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              bg-second-200
              divide-y-2 divide-accent-200
            "
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div
                  class="
                    flex
                    justify-start
                    lg:w-0 lg:flex-1
                    font-black font-serif
                    text-4xl
                    relative
                  "
                >
                  <LogoLink />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="
                      bg-second-200
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-second-800
                      hover:text-second-100 hover:bg-second-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                    @click="closeMenu"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      data-nombre="outline/x"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  >
                    <svg
                      data-nombre="outline/inbox"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Inbox
                  </div>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  >
                    <svg
                      data-nombre="outline/annotation"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Messaging
                  </div>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  >
                    <svg
                      data-nombre="outline/chat-alt-2"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Live Chat
                  </div>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  >
                    <svg
                      data-nombre="outline/question-mark-circle"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Knowledge Base
                  </div>
                </a>
              </nav>
            </div> -->
            </div>
            <div class="py-6 px-5">
              <nav class="grid grid-cols-2 gap-4 text-center">
                <router-link to="/" class="btn btn-none"> Home </router-link>
                <!-- <router-link to="/precio" class="btn btn-none">
                  Precios
                </router-link> -->
                <router-link to="/contacto" class="btn btn-none">
                  Contacto
                </router-link>
                <!-- <router-link to="/contacto" class="btn btn-ghost">
                  Ver Demos
                </router-link> -->
                <router-link to="/contacto" class="btn btn-main">
                  Contactanos
                </router-link>
                <!-- <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-gray-900"> Sign in </a>
              </p> -->
              </nav>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import DesktopMenu from '@/components/nav/DesktopMenu.vue';
  import LogoLink from '@/components/LogoLink.vue';
  export default defineComponent({
    components: {
      DesktopMenu,
      LogoLink,
    },
    setup() {
      const isMenuOpen = ref(false);
      const closeMenu = () => {
        isMenuOpen.value = false;
      };
      const openMenu = () => {
        isMenuOpen.value = true;
      };

      return {
        isMenuOpen,
        closeMenu,
        openMenu,
      };
    },
  });
</script>

<style lang="scss" scoped>
  header {
    @apply sticky top-0 inset-x-0 z-20 bg-second-200 dark:bg-second-700;
  }
  .btn {
    @apply whitespace-nowrap px-3 py-1 rounded-md text-base transition duration-200;
  }
  .btn-none {
    @apply font-normal text-main-600 hover:text-second-700;
  }
  .btn-ghost {
    @apply bg-transparent text-main-300 font-bold hover:bg-main-100 hover:text-main-500 hover:shadow-sm;
  }
  .btn-main {
    @apply bg-main-800 shadow-sm text-accent-500 font-bold hover:bg-accent-300 hover:text-main-300 hover:shadow-md col-span-full;
  }
</style>
