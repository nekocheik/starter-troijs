<template>
  <div class="bg-blue-800 min-h-[450px] block min-w-[300px] rounded-[32px] relative wrapper">
    <img v-if="cross" class="right-4 top-4 absolute cursor-pointer" src="/assets/icon/cross.svg" alt="" @click="closeModal" />
    <div class="p-6">
      <slot :close-modal="closeModal"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
  cross: {
    type: Boolean,
    default: true,
  },
});

let closeModal = () => {
  router.push({ query: { modalOpen: '' } });
};
</script>
