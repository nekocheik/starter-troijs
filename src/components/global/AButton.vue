<template>
  <button class="flex rounded-full items-center transition-all cursor-pointer" :class="[getBackground(), getWidth(), getSize()]" @click="$emit('click')">
    <AIcon v-if="icon" :icon="icon" :solid="solid" :regular="regular" :light="light" :thin="thin" class="mr-4" :class="iconClass" />
    <span class="text-content font-semibold font-content text-[18px]" :class="getTextStyle()">
      <slot></slot>
    </span>
    <AIcon v-if="iconRight" regular :icon="iconRight" class="ml-4" :class="iconClass" />
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import AIcon from './AIcon.vue';

defineEmits(['click']);
const props: any = defineProps({
  icon: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'primary',
  },
  block: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: String,
    default: '',
  },
  solid: {
    type: Boolean,
    default: false,
  },
  regular: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  thin: {
    type: Boolean,
    default: false,
  },
});

// Get the color of the background
function getBackground() {
  switch (props.type) {
    case 'primary':
      return 'bg-green-200 hover:bg-green-100 active:bg-green-200 primary-button';
    case 'primary-outline':
      return 'border-green-200 border-2';
    case 'secondary':
      return 'bg-blue-400 hover:bg-blue-hover active:bg-blue-press secondary-button';
    case 'tertiary':
      return 'bg-transparent hover:bg-blue-hover active:bg-blue-press';
    case 'link':
      return 'bg-transparent hover:text-green-100 text-green-200';
  }
}

// Get the color of the text
function getTextStyle() {
  switch (props.type) {
    case 'primary':
      if (props.center) {
        return 'text-blue-700 center';
      }
      return 'text-blue-700';
    case 'secondary':
      if (props.center) {
        return 'text-white center';
      }
      return 'text-white';
    case 'tertiary' || 'link':
      if (props.center) {
        return 'text-white center';
      }
      return 'text-white';
  }
}

// Get the width
function getWidth() {
  switch (props.block) {
    case true:
      if (props.center) {
        return 'w-full justify-center';
      }
      return 'w-full';
    case false:
      if (props.center) {
        return 'justify-center';
      }
      return '';
  }
}

// Get the size
function getSize() {
  if (props.type !== 'link') {
    if (props.large) {
      return 'py-3.5 px-8';
    } else if (props.small) {
      return 'py-[6px] px-[27px]';
    } else {
      return 'py-2.5 px-6';
    }
  }
  return '';
}
</script>
<style lang="scss">
.primary-button {
  box-shadow: 0px 0px 40px rgba(150, 255, 154, 0.5);
}

.secondary-button {
  box-shadow: 0px 0px 40px rgba(8, 61, 193, 0.5);
}
</style>
