<template>
  <NuxtLayout>
    <section class="w-full bg-white tails-selected-element" contenteditable="true">

      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
          <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div class="relative">
                  <p class="mb-2 font-medium text-gray-700 uppercase">Cupcake Ipsum</p>
                  <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">Cupcake ipsum dolor sit amet biscuit...</h2>
                </div>
                <p class="text-2xl text-gray-700">Cupcake ipsum dolor sit amet biscuit gummi bears tootsie roll jelly.</p>
                <nuxt-link to="/auth/login" class="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">Get Started Today</nuxt-link>
              </div>
            </div>
          </div>

          <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 class="w-full text-3xl font-bold">{{ $t('global.signUp') }}</h4>
              <p class="text-lg text-gray-500">{{ $t('auth.ifYouHaveAnAccount') }}
                <nuxt-link :to="localePath('/auth/login')" class="text-blue-600 underline lowercase" data-primary="blue-600">
                  {{ $t('global.signIn') }}
                </nuxt-link>
              </p>
              <div class="relative w-full mt-10 space-y-8">
                <div class="relative">
                  <label class="font-medium text-gray-900">
                    {{ $t('global.name') }}
                  </label>
                  <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" :placeholder="$t('auth.placeholder.enterYourName')">
                </div>
                <div class="relative">
                  <label class="font-medium text-gray-900">
                    {{ $t('global.email') }}
                  </label>
                  <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" :placeholder="$t('auth.placeholder.enterYourEmailAddress')">
                </div>
                <div class="relative">
                  <label class="font-medium text-gray-900">
                    {{ $t('global.password') }}
                  </label>
                  <input type="password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" :placeholder="$t('global.password')">
                </div>
                <div class="relative">
                  <nuxt-link :to="localePath('/auth/login')" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">
                    {{ $t('auth.createAccount') }}
                  </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </NuxtLayout>

</template>