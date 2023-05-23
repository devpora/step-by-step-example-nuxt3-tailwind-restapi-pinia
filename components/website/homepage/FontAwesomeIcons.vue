<template>
  <div class="h-auto bg-white dark:bg-gray-900 tails-selected-element">
    <div class="px-10 py-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-center">
        <h1
          class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 dark:text-gray-300 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"
        >
          <span
            class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline"
          >
            FontAwesome </span
          ><br class="lg:block hidden" />
        </h1>
        <div class="w-1/2 mx-auto">
          <client-only>
            <h4 class="pb-2">Import example 1</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon
                icon="far fa-sun"
                class="justify-self-center"
              />
              <font-awesome-icon icon="far fa-snowflake" />
              <font-awesome-icon icon="far fa-heart" />
              <font-awesome-icon icon="far fa-lightbulb" />
              <font-awesome-icon icon="far fa-hand-pointer" />
              <font-awesome-icon icon="far fa-bell" />
            </div>
            <h4 class="pb-2">Brand</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon icon="fab fa-google" />
              <font-awesome-icon icon="fab fa-facebook" />
              <font-awesome-icon icon="fab fa-instagram" />
              <font-awesome-icon icon="fab fa-github" />
              <font-awesome-icon icon="fab fa-tiktok" />
              <font-awesome-icon icon="fab fa-apple" />
            </div>
            <h4 class="pb-2">Import example 2</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon
                :icon="['far', 'sun']"
                size="xl"
                class="text-red-700"
              />
              <font-awesome-icon
                :icon="['far', 'snowflake']"
                size="xl"
                class="text-red-700"
              />
              <font-awesome-icon
                :icon="['far', 'heart']"
                size="xl"
                class="text-red-700"
              />
              <font-awesome-icon
                :icon="['far', 'lightbulb']"
                size="xl"
                class="text-red-700"
              />
              <font-awesome-icon
                :icon="['far', 'hand-pointer']"
                size="xl"
                class="text-red-700"
              />
              <font-awesome-icon
                :icon="['far', 'bell']"
                size="xl"
                class="text-red-700"
              />
            </div>
            <h4 class="pb-2">Solid</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon
                :icon="['fas', 'sun']"
                size="xl"
                class="text-green-700"
              />
              <font-awesome-icon
                :icon="['fas', 'snowflake']"
                size="xl"
                class="text-green-700"
              />
              <font-awesome-icon
                :icon="['fas', 'heart']"
                size="xl"
                class="text-green-700"
              />
              <font-awesome-icon
                :icon="['fas', 'lightbulb']"
                size="xl"
                class="text-green-700"
              />
              <font-awesome-icon
                :icon="['fas', 'house']"
                size="xl"
                class="text-green-700"
              />
              <font-awesome-icon
                :icon="['fas', 'user']"
                size="xl"
                class="text-green-700"
              />
            </div>
            <h4 class="pb-2">Dynamic</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon
                :icon="['far', 'sun']"
                size="xl"
                class="text-red-700"
                fade
              />
              <font-awesome-icon
                :icon="['far', 'snowflake']"
                size="xl"
                class="text-red-700"
                spin
              />
              <font-awesome-icon
                :icon="['far', 'heart']"
                size="xl"
                class="text-red-700"
                beat
              />
              <font-awesome-icon
                :icon="['far', 'lightbulb']"
                size="xl"
                class="text-red-700"
                beat-fade
              />
              <font-awesome-icon
                :icon="['far', 'hand-pointer']"
                size="xl"
                class="text-red-700"
                bounce
              />
              <font-awesome-icon
                :icon="['far', 'bell']"
                size="xl"
                class="text-red-700"
                shake
              />
            </div>
            <h4 class="pb-2">Resize</h4>
            <div class="grid grid-cols-6 justify-items-center">
              <font-awesome-icon :icon="['far', 'sun']" size="2xl" />
              <font-awesome-icon :icon="['far', 'snowflake']" size="2xl" />
              <font-awesome-icon :icon="['far', 'heart']" size="2xl" />
              <font-awesome-icon :icon="['far', 'lightbulb']" size="2xl" />
              <font-awesome-icon :icon="['far', 'hand-pointer']" size="2xl" />
              <font-awesome-icon :icon="['far', 'bell']" size="2xl" />
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
