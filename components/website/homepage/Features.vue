<script setup lang="ts">
import { TagIcon, TrophyIcon, TicketIcon, SwatchIcon, VariableIcon, WalletIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="flex flex-col bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
    <main class="container mx-auto px-4 py-8 flex-grow flex items-center justify-center pt-20">
      <section class="py-20 bg--gray-200 tails-selected-element">
        <div class="container max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold tracking-tight text-center">Cupcake ipsum</h2>
          <p class="mt-2 text-lg text-center text-gray-600">Candy canes danish oat cake apple pie gingerbread gingerbread wafer oat cake.</p>
          <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <TrophyIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Bonbon</h4>
              <p class="text-base text-center text-gray-500">Bonbon carrot cake donut bear claw sesame snaps halvah candy donut.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <TicketIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Brownie</h4>
              <p class="text-base text-center text-gray-500">Brownie cake jujubes chocolate bar jelly-o. </p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <SwatchIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Wafer</h4>
              <p class="text-base text-center text-gray-500">Wafer pie marshmallow halvah marzipan oat cake oat cake chocolate cake.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <VariableIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Donut</h4>
              <p class="text-base text-center text-gray-500">Donut toffee cheesecake halvah cake bear claw lollipop.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <WalletIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Lemon</h4>
              <p class="text-base text-center text-gray-500">Lemon drops toffee dragée bear claw pudding.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
              <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <TagIcon class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-xl font-medium text-gray-700">Chocolate</h4>
              <p class="text-base text-center text-gray-500">Chocolate bar chocolate bar pudding donut pastry jelly cake.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  </div>
</template>
