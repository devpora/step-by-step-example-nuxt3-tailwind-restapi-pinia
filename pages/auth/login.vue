<template>
  <NuxtLayout>
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8 tails-selected-element" contenteditable="true">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

          <div class="w-full space-y-5 md:w-3/5 md:pr-16">
            <p class="font-medium text-blue-500 uppercase" data-primary="blue-500">Cupcake Ipsum</p>
            <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Cupcake ipsum dolor sit amet biscuit...
            </h2>
            <p class="text-xl text-gray-600 md:pr-16">
              Cupcake ipsum dolor sit amet biscuit gummi bears tootsie roll jelly. Ice cream pastry danish tiramisu dessert shortbread chocolate cake.
            </p>
          </div>

          <div class="w-full mt-16 md:mt-0 md:w-2/5">
            <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7" data-rounded="rounded-lg" data-rounded-max="rounded-full">
              <h3 class="mb-6 text-2xl font-medium text-center">{{ $t('auth.signInToAccount') }}</h3>
              <input type="text" name="email" id="email" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" data-rounded="rounded-lg" data-primary="blue-500" :placeholder="$t('global.emailAddress')">
              <input type="password" name="password" id="password" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" data-rounded="rounded-lg" data-primary="blue-500" :placeholder="$t('global.password')">
              <div class="block">
                <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg" data-primary="blue-600" data-rounded="rounded-lg">
                  {{ $t('auth.logMeIn') }}
                </button>
              </div>
              <p class="w-full mt-4 text-sm text-center text-gray-500">
                {{ $t('auth.dontHaveAccount') }} <nuxt-link to="/auth/register" class="text-blue-500 underline">{{ $t('auth.signUpHere') }}</nuxt-link></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </NuxtLayout>

</template>