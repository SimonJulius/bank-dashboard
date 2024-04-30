<script setup lang="ts">
import { formatNumber } from '@/lib/utils'

interface AppRequest {
  title: number
  subtitle: string
  footer: {
    percentage: number
    period: string
  }
}
defineProps<{
  item: AppRequest
}>()
</script>

<template>
  <div
    class="text-dark-100 flex gap-3 bg-white p-4 w-[250px] h-[125px] rounded-lg shadow-sm shadow-slate-200"
  >
    <div>
      <slot name="main-icon" />
    </div>
    <div class="flex flex-col">
      <h3 class="h3-bold">
        {{ formatNumber(item.title) }}
      </h3>
      <div class="subtitle-1 capitalize">
        {{ item.subtitle }}
      </div>
      <div class="flex gap-2 mt-auto">
        <div
          class="flex gap-1"
          :class="
            item.subtitle === 'total agents'
              ? 'text-red-500'
              : item.subtitle === 'total user'
                ? 'text-yellow-500'
                : 'text-green-400'
          "
        >
          <slot name="footer-icon" />
          {{ item.footer.percentage }}%
        </div>
        <div class="text-gray-400 from-neutral-200 capitalize">{{ item.footer.period }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
