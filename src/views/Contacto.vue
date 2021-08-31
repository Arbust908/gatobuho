<template>
  <div class="min-h-screen bg-white">
    <main>
      <!-- Header -->
      <div class="py-24 bg-blueGray-100 sm:py-32">
        <div
          class="
            max-w-md
            mx-auto
            pl-4
            pr-8
            sm:max-w-lg sm:px-6
            lg:max-w-7xl lg:px-8
          "
        >
          <h1
            class="
              text-4xl
              leading-10
              font-bold font-serif
              tracking-wider
              text-main-700 text-center
              sm:text-5xl sm:leading-none
              lg:text-6xl
            "
          >
            Hablemos!
          </h1>
          <p
            class="
              mt-6
              max-w-3xl
              mx-auto
              text-xl
              leading-normal
              text-main-500 text-center
            "
          >
            Si crees que podemos ser de ayuda, escríbenos. Nuestro equipo esta
            esperando escuchar tus ideas y poder elevar tu marca.
          </p>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          class="
            relative
            py-16
            px-4
            sm:py-24 sm:px-6
            lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2
          "
        >
          <div class="lg:pr-8">
            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2
                class="
                  text-3xl
                  font-bold font-serif
                  tracking-wider
                  sm:text-4xl
                  text-main-300
                "
              >
                Queremos ayudarte!
              </h2>
              <p class="mt-4 text-lg text-main-600 sm:mt-3">
                Amamos lo que hacemos y queremos ayudarte a hacer lo que vos
                amas. Creemos que tenemos mucho para dar y aportar a tu idea.
                Contanos un poco mas y te ayudaremos a hacerla realidad.
              </p>
              <form
                action="#"
                method="POST"
                class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-main-400"
                    >Nombre</label
                  >
                  <div class="mt-1">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autocomplete="given-name"
                      class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-grape-500 focus:border-grape-500
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-main-400"
                    >Apellido</label
                  >
                  <div class="mt-1">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autocomplete="family-name"
                      class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-grape-500 focus:border-grape-500
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-main-400"
                    >Mail</label
                  >
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-grape-500 focus:border-grape-500
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
                <!-- <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-medium text-main-400"
                    >Company</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      class="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div> -->
                <!-- <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-main-400"
                      >Phone</label
                    >
                    <span id="phone-description" class="text-sm text-gray-500"
                      >Optional</span
                    >
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="tel"
                      aria-describedby="phone-description"
                      class="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div> -->
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="how-can-we-help"
                      class="block text-sm font-medium text-main-400"
                      >Contanos tu idea</label
                    >
                    <span
                      id="how-can-we-help-description"
                      class="text-sm text-gray-500"
                      >Max. 500 caracteres</span
                    >
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows="4"
                      class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-grape-500 focus:border-grape-500
                        border border-gray-300
                        rounded-md
                      "
                    ></textarea>
                  </div>
                </div>
                <fieldset class="sm:col-span-2">
                  <legend class="block text-sm font-medium text-main-400">
                    Presupuesto
                  </legend>
                  <div class="mt-4 grid grid-cols-1 gap-y-4">
                    <div class="flex items-center">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        value="under_25k"
                        type="radio"
                        class="
                          focus:ring-grape-500
                          h-4
                          w-4
                          text-grape-600
                          border-gray-300
                        "
                      />
                      <label for="budget-under-25k" class="ml-3">
                        <span class="block text-sm text-main-400"
                          >Less than $25K</span
                        >
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        value="25k-50k"
                        type="radio"
                        class="
                          focus:ring-grape-500
                          h-4
                          w-4
                          text-grape-600
                          border-gray-300
                        "
                      />
                      <label for="budget-25k-50k" class="ml-3">
                        <span class="block text-sm text-main-400"
                          >$25K – $50K</span
                        >
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        value="50k-100k"
                        type="radio"
                        class="
                          focus:ring-grape-500
                          h-4
                          w-4
                          text-grape-600
                          border-gray-300
                        "
                      />
                      <label for="budget-50k-100k" class="ml-3">
                        <span class="block text-sm text-main-400"
                          >$50K – $100K</span
                        >
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        value="over_100k"
                        type="radio"
                        class="
                          focus:ring-grape-500
                          h-4
                          w-4
                          text-grape-600
                          border-gray-300
                        "
                      />
                      <label for="budget-over-100k" class="ml-3">
                        <span class="block text-sm text-main-400">$100K+</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div class="sm:col-span-2">
                  <label
                    for="how-did-you-hear-about-us"
                    class="block text-sm font-medium text-main-400"
                    >Como nos encontraste?</label
                  >
                  <div class="mt-1">
                    <input
                      id="how-did-you-hear-about-us"
                      type="text"
                      name="how-did-you-hear-about-us"
                      class="
                        shadow-sm
                        focus:ring-grape-500 focus:border-grape-500
                        block
                        w-full
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
                <div class="text-right sm:col-span-2">
                  <button
                    type="submit"
                    class="
                      inline-flex
                      justify-center
                      items-center
                      space-x-3
                      font-bold
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      rounded-md
                      text-white
                      bg-accent
                      transition
                      duration-200
                      ease-out
                      hover:bg-accent-light hover:text-main-600
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-grape-500
                    "
                  >
                    <span> Submit </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-main-800">
        <div
          class="
            max-w-md
            mx-auto
            text-center
            py-16
            px-4
            sm:max-w-2xl sm:py-24 sm:px-6
            lg:px-8 lg:py-32
          "
        >
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            <span class="block text-main-300">Te interesa ser parte?</span>
            <span class="block text-accent">Avisanos.</span>
          </h2>
          <a
            href="#"
            class="
              mt-8
              w-full
              inline-flex
              items-center
              justify-center
              py-3
              px-5
              bg-main-300
              border border-transparent
              rounded-md
              shadow-md
              text-base
              font-medium
              text-white
              hover:bg-main-500
              sm:w-auto
              space-x-4
            "
          >
            <span>Hagamos Codigo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
