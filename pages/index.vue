<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <main class="container mx-auto px-4 py-8 flex-grow flex items-center justify-center pt-20">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl font-extralight text-yellow-500 mb-4">
            {{ $t('index.title') }}
          </h1>
          <h2 class="text-4xl font-light text-red-600 mb-4">
            {{ $t('index.description') }}
          </h2>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>