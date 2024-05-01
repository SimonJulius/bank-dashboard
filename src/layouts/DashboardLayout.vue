<script setup lang="ts">
import NavbarComponent from '@/components/shared/NavbarComponent.vue'
import SidebarComponent from '@/components/shared/SidebarComponent.vue'
import BottomTabComponent from '@/components/shared/BottomTabComponent.vue'
</script>

<template>
  <div class="flex w-full">
    <SidebarComponent />
    <div class="w-full">
      <div>
        <NavbarComponent />
      </div>
      <div class="max-w-5xl mx-auto">
        <slot />
      </div>
    </div>
    <Teleport to="body">
      <BottomTabComponent class="fixed bottom-0 z-50 rounded-t-2xl bg-primary-500 md:hidden" />
    </Teleport>
  </div>
</template>
