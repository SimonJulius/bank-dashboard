<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div
    class="w-fit px-2 bg-opacity-10 rounded-2xl capitalize text-[12px] min-w-16 flex-center"
    :class="{
      'text-[#ffbd00] bg-[#ffbd00]': label === 'pending',
      'text-green-600 bg-green-600': label === 'active'
    }"
  >
    {{ label }}
  </div>
</template>
