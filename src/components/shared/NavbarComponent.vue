<script setup>
import SearchComponent from './SearchComponent.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import MobileNav from './MobileNav.vue'
</script>

<template>
  <nav
    class="flex border-none bg-white w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 max-md:justify-between"
  >
    <router-link to="/" class="flex items-center gap-1">
      <h2 class="h2-bold text-dark-100">Dashboard</h2>
    </router-link>
    <SearchComponent class="ml-auto max-md:hidden" />
    <div class="flex-center gap-3 max-md:ml-auto">
      <div class="max-md:hidden">
        <Select class="w-10 h-10 p-2">
          <SelectTrigger class="border-none">
            <SelectValue placeholder="EN" class="text-gray-400 font-bold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple"> EN </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <span class="min-w-10 h-10 p-2 rounded-full bg-gray-50">
        <img src="@/assets/icons/sun.svg" width="30" height="30" />
      </span>
      <span class="min-w-10 h-10 p-2 rounded-full bg-gray-50">
        <img src="@/assets/icons/bell.svg" width="30" height="30" />
      </span>
      <span class="min-w-10 h-10 p-2 rounded-full bg-gray-300 max-md:hidden"></span>
    </div>
    <MobileNav />
  </nav>
</template>
