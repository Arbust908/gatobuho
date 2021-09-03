<template>
  <div class="bg-white">
    <div
      class="
        max-w-4xl
        mx-auto
        py-16
        px-4
        sm:px-6 sm:py-24
        lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="
          text-4xl
          font-extrabold
          tracking-tight
          text-second-800
          sm:text-4xl
          font-serif
        "
      >
        <span class="block">¿Te convencimos?</span>
        <span
          class="
            block
            bg-gradient-to-r
            from-second-500
            to-main-500
            bg-clip-text
            text-transparent
            pb-1
          "
        >
          Charlemos y hagamos Magia.
        </span>
      </h2>
      <form class="mt-4 sm:flex sm:max-w-md">
        <div
          class="
            w-full
            flex
            justify-between
            bg-white
            border border-accent-light
            rounded-md
            shadow-sm
            py-1
            px-1
            text-base text-main-800
            focus-within:ring-2
            focus-within:ring-main-500
            focus-within:border-main-500
          "
        >
          <label for="email-address" class="sr-only">Tu Email</label>
          <input
            id="email-address"
            type="email"
            name="email-address"
            autocomplete="email"
            required
            class="
              w-full
              bg-transparent
              border-none
              rounded-md
              focus:outline-none focus:ring-0
              placeholder-main-600
              py-1
            "
            placeholder="Tu email"
          />
          <button class="rounded-md p-2 focus:outline-none focus:bg-main-100">
            <span
              type="submit"
              class="
                w-full
                flex
                items-center
                justify-center
                bg-main-600
                px-4
                py-1
                transition
                duration-150
                transform
                ease-out
                hover:animate-boing-light
                text-base
                font-medium
                rounded-md
                shadow-sm
                text-main-100
                hover:bg-main-800
              "
            >
              Hablemos!
            </span>
          </button>
        </div>
      </form>
      <!-- <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="#"
            class="flex items-center justify-center bg-gradient-to-r from-blue-600 to-rose-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-rose-700"
          >
            Learn more
          </a>
          <a
            href="#"
            class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-rose-800 bg-rose-50 hover:bg-rose-100"
          >
            Get started
          </a>
        </div> -->
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
