<template>
  <component :is="tag" :class="ctaStyle" :target="target" :to="to" class="py-4 w-fit lg:rounded-full text-base font-[600] rounded-full px-8" @click="$emit('click')">
    <slot>Label</slot>
  </component>
</template>
<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';

defineEmits(['click']);
const props = defineProps({
  mode: {
    type: Number,
    default: 1,
  },
  target: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'button',
  },
});

const ctaStyle = computed(() => {
  switch (props.mode) {
    case 1:
      return 'custom-shadow bg-green-200 text-[#050533] shadow-[0px 0px 40px rgba(8, 61, 193, 0.5)]';
      // eslint-disable-next-line no-unreachable
      break;
    case 2:
      return 'custom-shadow bg-green-50 text-blue-900';
      // eslint-disable-next-line no-unreachable
      break;
    case 3:
      return 'custom-shadow text-green-200 border-green-200 border';
    // eslint-disable-next-line no-unreachable
    case 4:
      return 'text-green-50 bg-blue-400 font-semibold shadow-[0px_0px_40px_rgba(8,61,193,0.5)]';
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return 'custom-shadow bg-green-50 text-blue-900';
      // eslint-disable-next-line no-unreachable
      break;
  }
});
</script>
<style lang="scss">
.custom-shadow {
  -webkit-box-shadow: 0px 0px 32px 2px rgba(150, 255, 154, 0.5);
  box-shadow: 0px 0px 32px 2px rgba(150, 255, 154, 0.5);
}
</style>
