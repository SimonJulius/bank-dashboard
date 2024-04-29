<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const searchText = ref<string>('')

// Handle search text change
const handleSearchChange = () => {
  console.log(searchText.value)
}
</script>

<template>
  <div class="relative w-full max-lg:hidden max-w-[280px]">
    <div class="bg-light-500 relative flex min-h-[38px] grow items-center gap-1 rounded-md px-4">
      <img
        src="@/assets/icons/search.svg"
        height="24"
        width="24"
        alt="search"
        class="cursor-pointer"
      />
      <Input
        v-model="searchText"
        type="text"
        placeholder="Search everywhere..."
        class="paragraph-regular no-focus placeholder border-none shadow-none outline-none bg-transparent"
      />
    </div>
  </div>
</template>
