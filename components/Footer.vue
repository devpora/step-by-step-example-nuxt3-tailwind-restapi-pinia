<template>
  <div class="text-gray-800 dark:text-gray-500">
    <div class="w-full bg-white dark:bg-gray-900 pt-16 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
    md:px-24 lg:px-8">
    <div>
      <div class="mt-0 mr-0 mb-8 ml-0 grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <p class="inline-flex text-xl font-bold  tracking-wide uppercase">
            {{ $t('global.company') }}
          </p>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimh.</p>
            <p class="mt-4 mr-0 mb-0 ml-0 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          </div>
        </div>
        <div class="text-sm space-y-2">
          <p class="tracking-wide text-base font-bold">
            {{ $t('global.contacts') }}
          </p>
          <div class="flex">
            <p class="text-base mt-0 mr-1 mb-0 ml-0">{{ $t('global.phone') }}:</p>
            <p class="text-base transition-colors duration-300 hover:text-violet-700">090-123-5678</p>
          </div>
          <div class="flex">
            <p class="text-base mt-0 mr-1 mb-0 ml-0">{{ $t('global.email') }}:</p>
            <p class="text-base transition-colors duration-300 hover:text-violet-700">info@lorem.mail</p>
          </div>
          <div class="flex">
            <p class="text-base mt-0 mr-1 mb-0 ml-0">{{ $t('global.address') }}:</p>
            <p class="text-base transition-colors duration-300 hover:text-violet-700">312
              Lovely Street, LM</p>
          </div>
        </div>
        <div>
          <p class="tracking-wide text-base font-bold">{{ $t('global.social') }}</p>
          <p class="text-sm mt-4 mr-0 mb-0 ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pr-0 pb-10 pl-0 border-t lg:flex-row">
        <p class="text-sm text-gray-600">Copyright © {{ new Date().getFullYear() }} | {{ $t('footer.allRightsReserved') }}</p>
        <div class="space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row flex flex-col items-center mt-0 mr-0 mb-3
          ml-0">
          <div>
            <p class="text-sm text-gray-600 transition-colors duration-300 hover:text-violet-700">
              {{ $t('footer.faq') }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-600 transition-colors duration-300 hover:text-violet-700">
              {{ $t('footer.privacyPolicy') }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-600 transition-colors duration-300 hover:text-violet-700">
              {{ $t('footer.termsConditions') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</template>