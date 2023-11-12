<template>
  <div class="max-w-[100vw] overflow-x-hidden">
    <div class="font-body">
      <Modals></Modals>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.name" />
      </transition>
    </router-view>
    <ASnackbar />
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/hooks/useNotification';

useNotification();
</script>

<style lang="scss">
body {
  @apply text-secondary font-thin font-body text-b2 lg:text-t3 lg:font-thin bg-quinary;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-display;
}
.wrapper-page {
  @apply w-[334px] sm:w-[534px] lg:w-[880px] xl:w-full xl:max-w-[980px];
}
// Template helpers page
.template-page {
  @apply xl:px-[110px] md:px-[40px] px-[16px] lg:max-w-[980px];
}
.template-grid-5 {
  @apply grid grid-flow-row-dense gap-x-[28px] gap-y-[24px] 3xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2;
}
.template-grid-6 {
  @apply grid grid-flow-row-dense gap-x-[28px] gap-y-[24px] 3xl:grid-cols-6 2xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-2;
}
.modal-open {
  overflow: hidden;
}
* {
  outline: none;
}
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
