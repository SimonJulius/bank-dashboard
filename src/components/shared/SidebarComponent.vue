<script setup lang="ts">
import { sidebarLinks } from '@/constants'

const getImageUrl = (fileName: string) => {
  const linkd = new URL(`../../assets/icons/${fileName}.svg`, import.meta.url)
  return linkd.href
}
</script>

<template>
  <section
    class="bg-primary-500 text-white flex min-h-screen flex-col overflow-y-auto border-r pt-8 px-4 max-md:hidden lg:min-w-[200px] lg:w-3/12 max-lg:min-w-[100px]"
  >
    <div class="flex flex-col self-stretch">
      <img src="@/assets/icons/wema.svg" alt="" width="80" height="80" class="self-center" />
      <hr class="w-full border-t-light-50 mt-2" />
    </div>
    <div class="flex h-full flex-col gap-6 mt-6 max-lg:items-center">
      <template v-for="item of sidebarLinks" :key="item.route">
        <div
          class="flex gap-3 items-center mb-4 px-2"
          :class="{ 'bg-white bg-opacity-15 border-r-4 py-2 rounded-md': item.route === '/' }"
        >
          <img
            :src="getImageUrl(item.imgURL)"
            width="25"
            height="25"
            :alt="item.label"
            class="max-lg:w-[35px]"
          />
          <p class="text-light-200 max-lg:hidden font-bold text-[18px]">
            {{ item.label }}
          </p>
        </div>
      </template>
    </div>
    <div class="bg-white bg-opacity-15 gap-2 mt-6 p-4 rounded-xl flex-center mb-40">
      <span class="min-w-12 h-12 p-2 rounded-full bg-gray-300"></span>
      <div class="max-lg:hidden">
        <p class="font-bold">Nafisa Sh.</p>
        <p class="text-light-200 text-[12px]">Support manager</p>
      </div>
    </div>
  </section>
</template>
