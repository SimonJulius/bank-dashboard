<script setup lang="ts">
import { tabLinks } from '@/constants'
const getImageUrl = (link: string | URL) => {
  const linkd = new URL(link, import.meta.url)
  console.log(linkd.href)
  return linkd.href
}
</script>

<template>
  <div class="w-full p-4 flex-between">
    <div v-for="tab of tabLinks" :key="tab.label" class="flex flex-col justify-center items-center">
      <img :src="getImageUrl(tab.imgURL)" width="20" height="20" :alt="tab.label" />
      <p class="text-light-200 max-sm:text-[12px] text-[16px]">
        {{ tab.label }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
