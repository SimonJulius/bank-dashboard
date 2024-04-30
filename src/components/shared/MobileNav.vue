<script setup lang="ts">
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import SearchComponent from './SearchComponent.vue'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <img
        src="@/assets/icons/hamburger.svg"
        alt="hamburger"
        height="36"
        width="36"
        className="md:hidden"
      />
    </SheetTrigger>
    <SheetContent
      side="left"
      class="bg-primary-500 border-none text-white flex flex-col justify-between"
    >
      <SheetHeader class="flex flex-col">
        <img
          src="@/assets/icons/wema.svg"
          alt="wema bank logo"
          width="56"
          height="56"
          class="self-center"
        />
        <hr class="w-full border-t-light-50 mt-2" />
      </SheetHeader>
      <div>
        <SearchComponent class="border-none" />
        <div class="bg-white bg-opacity-15 flex gap-2 mt-6 mb-3 p-4 rounded-xl items-center">
          <span class="min-w-12 h-12 p-2 rounded-full bg-gray-300"></span>
          <div>
            <p class="font-bold">Nafisa Sh.</p>
            <p class="text-light-200 text-[12px]">Support manager</p>
          </div>
        </div>
        <Select class="w-10 h-10 p-2">
          <SelectTrigger class="border-none no-focus">
            <SelectValue placeholder="EN" class="font-bold no-focus" />
          </SelectTrigger>
          <SelectContent class="no-focus">
            <SelectGroup class="no-focus">
              <SelectItem value="apple" class="no-focus"> EN </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <SheetFooter class="flex flex-col mt-auto mb-5">
        <div class="flex gap-3 items-center">
          <img src="@/assets/icons/users.svg" width="25" height="25" alt="users" />
          <p class="text-light-200 text-[18px]">Users</p>
        </div>
        <div class="flex gap-3 items-center mt-4">
          <img src="@/assets/icons/settings.svg" width="25" height="25" alt="settings" />
          <p class="text-light-200 text-[18px]">Settings</p>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
