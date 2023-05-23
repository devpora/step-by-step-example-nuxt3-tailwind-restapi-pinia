<script setup lang="ts">
import {
  MoonIcon,
  SunIcon,
  ArchiveBoxIcon,
  SquaresPlusIcon,
  TicketIcon,
  TruckIcon,
} from '@heroicons/vue/24/outline'
import {
  MoonIcon as MoonIconSolid,
  SunIcon as SunIconSolid,
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  SquaresPlusIcon as SquaresPlusIconSolid,
  TicketIcon as TicketIconSolid,
  TruckIcon as TruckIconSolid,
} from '@heroicons/vue/24/solid'
</script>
<template>
  <section class="h-auto bg-white dark:bg-gray-900 tails-selected-element">
    <div class="px-10 py-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-center">
        <h1
          class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 dark:text-gray-300 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"
        >
          <span
            class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline"
          >
            HeroIcons </span
          ><br class="lg:block hidden" />
        </h1>
        <div class="w-1/2 mx-auto">
          <h4 class="pb-2">Outline</h4>
          <div class="grid grid-cols-6 justify-items-center">
            <MoonIcon class="h-6 w-6 text-blue-500" />
            <SunIcon class="h-6 w-6 text-blue-500" />
            <ArchiveBoxIcon class="h-6 w-6 text-blue-500" />
            <SquaresPlusIcon class="h-6 w-6 text-blue-500" />
            <TicketIcon class="h-6 w-6 text-blue-500" />
            <TruckIcon class="h-6 w-6 text-blue-500" />
          </div>
          <h4 class="pb-2">Solid</h4>
          <div class="grid grid-cols-6 justify-items-center">
            <MoonIconSolid class="h-6 w-6 text-blue-500" />
            <SunIconSolid class="h-6 w-6 text-blue-500" />
            <ArchiveBoxIconSolid class="h-6 w-6 text-blue-500" />
            <SquaresPlusIconSolid class="h-6 w-6 text-blue-500" />
            <TicketIconSolid class="h-6 w-6 text-blue-500" />
            <TruckIconSolid class="h-6 w-6 text-blue-500" />
          </div>
          <h4 class="pb-2">Color</h4>
          <div class="grid grid-cols-6 justify-items-center">
            <MoonIcon class="h-6 w-6 text-red-500" />
            <SunIcon class="h-6 w-6 text-red-500" />
            <ArchiveBoxIcon class="h-6 w-6 text-red-500" />
            <SquaresPlusIcon class="h-6 w-6 text-red-500" />
            <TicketIcon class="h-6 w-6 text-red-500" />
            <TruckIcon class="h-6 w-6 text-red-500" />
          </div>
          <div class="grid grid-cols-6 justify-items-center">
            <MoonIconSolid class="h-6 w-6 text-red-500" />
            <SunIconSolid class="h-6 w-6 text-red-500" />
            <ArchiveBoxIconSolid class="h-6 w-6 text-red-500" />
            <SquaresPlusIconSolid class="h-6 w-6 text-red-500" />
            <TicketIconSolid class="h-6 w-6 text-red-500" />
            <TruckIconSolid class="h-6 w-6 text-red-500" />
          </div>
          <h4 class="pb-2">Resize</h4>
          <div class="grid grid-cols-6 justify-items-center">
            <MoonIconSolid class="h-24 w-24 text-orange-500" />
            <SunIconSolid class="h-24 w-24 text-orange-500" />
            <ArchiveBoxIconSolid class="h-24 w-24 text-orange-500" />
            <SquaresPlusIconSolid class="h-24 w-24 text-orange-500" />
            <TicketIconSolid class="h-24 w-24 text-orange-500" />
            <TruckIconSolid class="h-24 w-24 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
