<script setup lang="ts">
import NavbarComponent from '@/components/shared/NavbarComponent.vue'
import SidebarComponent from '@/components/shared/SidebarComponent.vue'
</script>

<template>
  <div class="flex w-full">
    <SidebarComponent />
    <div class="w-full">
      <div>
        <NavbarComponent />
      </div>
      <slot />
    </div>
  </div>
</template>
