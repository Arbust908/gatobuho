<template>
  <div class="mt-12 xl:mt-0">
    <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
      Subscribe to our newsletter
    </h3>
    <p class="mt-4 text-base text-gray-500">
      The latest news, articles, and resources, sent to your inbox weekly.
    </p>
    <form class="mt-4 sm:flex sm:max-w-md">
      <label for="email-address" class="sr-only">Email address</label>
      <input
        id="email-address"
        type="email"
        name="email-address"
        autocomplete="email"
        required
        class="
          appearance-none
          min-w-0
          w-full
          bg-white
          border border-gray-300
          rounded-md
          shadow-sm
          py-2
          px-4
          text-base text-gray-900
          placeholder-gray-500
          focus:outline-none
          focus:ring-indigo-500
          focus:border-indigo-500
          focus:placeholder-gray-400
        "
        placeholder="Enter your email"
      />
      <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          class="
            w-full
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-purple-600
            to-indigo-600
            bg-origin-border
            px-4
            py-3
            border border-transparent
            text-base
            font-medium
            rounded-md
            shadow-sm
            text-white
            hover:from-purple-700 hover:to-indigo-700
          "
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
