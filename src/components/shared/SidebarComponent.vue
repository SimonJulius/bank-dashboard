<script setup lang="ts">
import { sidebarLinks } from '@/constants'

const getImageUrl = (link: string | URL) => {
  const linkd = new URL(link, import.meta.url)
  console.log(linkd.href)
  return linkd.href
}
</script>

<template>
  <section
    class="bg-primary-500 text-white sticky flex min-h-screen flex-col overflow-y-auto border-r pt-8 px-4 max-sm:hidden lg:w-[300px]"
  >
    <div class="flex flex-col self-stretch">
      <img src="@/assets/icons/wema.svg" alt="" width="80" height="80" class="self-center" />
      <hr class="w-full border-t-light-50 mt-2" />
    </div>
    <div class="flex h-full flex-col gap-6 mt-6">
      <template v-for="item of sidebarLinks" :key="item.route">
        <div class="flex gap-3 items-center">
          <img :src="getImageUrl(item.imgURL)" width="25" height="25" :alt="item.label" />
          <p class="text-light-200">
            {{ item.label }}
          </p>
        </div>
      </template>
    </div>
  </section>
</template>
