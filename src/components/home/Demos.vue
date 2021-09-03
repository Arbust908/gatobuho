<template>
  <div class="demos">
    <div class="relative">
      <div
        class="
          lg:mx-auto
          lg:max-w-7xl
          lg:px-8
          lg:grid
          lg:grid-cols-2
          lg:grid-flow-col-dense
          lg:gap-24
        "
      >
        <div
          class="
            px-4
            max-w-xl
            mx-auto
            sm:px-6
            lg:py-16 lg:max-w-none lg:mx-0 lg:px-0
          "
        >
          <div>
            <div>
              <span
                class="
                  h-12
                  w-12
                  rounded-md
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-tr
                  from-accent-300
                  to-accent-500
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-second-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h2
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-second-600
                  font-serif
                "
              >
                Sitios administrables a medida
              </h2>
              <p class="mt-4 text-lg text-second-400">
                Para minimizar la dependencia de terceros, nuestros sitios
                pueden tener un panel de administracion con todas las
                funcionalidades que necesites. Subida de imagenes, edicion de
                textos, links a redes y mas!
              </p>
              <div class="mt-6">
                <a
                  href="https://richcova.com/"
                  class="
                    inline-flex
                    bg-gradient-to-tr
                    from-accent-300
                    to-accent-500
                    px-4
                    py-2
                    text-base
                    font-medium
                    rounded-md
                    shadow-sm
                    text-second-800
                    transition
                    duration-100
                    hover:from-accent-500
                    hover:to-accent-300
                    hover:animate-boing-light
                  "
                >
                  Ver Mas
                </a>
              </div>
            </div>
          </div>
          <!-- Conceguir Cita de Rich -->
          <!-- <div class="mt-8 border-t border-blueGray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-blueGray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                  diam. Sit orci risus aenean curabitur donec aliquet. Mi
                  venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full" src="" alt="" />
                  </div>
                  <div class="text-base font-medium text-blueGray-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div> -->
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="
              relative
              pl-4
              -mr-48
              sm:pl-6
              md:-mr-16
              lg:px-0 lg:m-0 lg:h-full
            "
          >
            <img
              class="
                w-full
                rounded-xl
                shadow-xl
                opacity-75
                absolute
                blur-md
                lg:left-8 lg:h-full lg:w-auto lg:max-w-none
              "
              src="@/assets/imgs/RichCova/PanelHome.png"
              alt="Inbox user interface"
            />
            <img
              class="
                relative
                w-full
                rounded-xl
                ring-1 ring-black ring-opacity-5
                lg:absolute lg:left-8 lg:h-full lg:w-auto lg:max-w-none
              "
              src="@/assets/imgs/RichCova/PanelHome.png"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-24">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
        >
          <div>
            <div>
              <span
                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark"
              >
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h2
                class="text-3xl font-extrabold tracking-tight text-accent-dark font-serif"
              >
                Better understand your customers
              </h2>
              <p class="mt-4 text-lg text-main-700">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra
                at. Lectus viverra dui tellus ornare pharetra.
              </p>
              <div class="mt-6">
                <router-link
                  to="/precios"
                  class="inline-flex bg-gradient-to-br from-accent to-accent-dark px-4 py-2 text-base font-medium rounded-md shadow-sm text-white hover:from-accent-dark hover:to-accent"
                >
                  Ver mas
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div
            class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="@/assets/imgs/RichCova/Home.png"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  .demos {
    @apply pt-16 pb-32 overflow-hidden bg-second-100;
  }
</style>
