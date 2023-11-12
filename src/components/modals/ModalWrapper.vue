<template>
  <div data-cy="modal" :class="{ 'modal w-[100vw] h-[100vh] bg-[#00000057] backdrop-blur-lg fixed top-0 left-0 z-[9999999] cursor-pointer': defaultStyle }">
    <div ref="modal" :class="{ 'flex justify-center items-center h-full modalWrapper': defaultStyle }">
      <div :class="{ 'table cursor-default': defaultStyle }" class="modal-wrapper-content">
        <slot :close-modal="close"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted, defineProps, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';

import useModal from '@/hooks/useModal';

const ModalEvent = ref();
const modal = ref();
const { close } = useModal();
const route = useRoute();

const currentModal = computed(() => route.query.modalOpen);
defineProps({
  defaultStyle: {
    type: Boolean,
    default: true,
  },
  clean: {
    default: () => {
      return {};
    },
    type: Function,
  },
  name: {
    type: String,
    required: true,
  },
});

let body = ref(document.querySelector('body'));

watchEffect(() => {
  if (currentModal.value && body.value) {
    body.value.style.overflowY = 'clip';
  } else {
    if (body.value) body.value.style.overflowY = 'auto';
  }
});

onUnmounted(() => {
  if (body.value) {
    body.value.style.overflowY = 'auto';
  }
});

onBeforeMount(() => {
  ModalEvent.value = document.addEventListener('click', ({ target }) => {
    if (modal.value && (target as HTMLElement).className === modal.value.className && !(target as HTMLElement).closest('.modal-wrapper-content')) {
      if (currentModal.value) {
        close();
      }
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('mousedown', ModalEvent.value, true);
});
</script>

<style lang="scss" scoped></style>
