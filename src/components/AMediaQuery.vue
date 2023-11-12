<template>
  <slot :size="screen.size" :sizes="screen.sizes"> </slot>
</template>

<script setup lang="ts">
const windowWidth = ref(window.innerWidth);
const sizes = {
  '640': 'sm',
  '768': 'md',
  '1024': 'lg',
  '1280': 'xl',
};

const computRize = () => {
  windowWidth.value = window.innerWidth;
};

window.addEventListener('resize', computRize);

onUnmounted(() => {
  window.removeEventListener('resize', computRize);
});

function getSize(windowScreen: number) {
  let currentSizeName: string = Object.values(sizes)[0];
  let currentSizeVal = Number(Object.keys(sizes)[0]);

  const NewSizes: { [index: string]: boolean } = {
    [currentSizeName]: true,
  };

  for (const key in sizes) {
    if (Number(key) < windowScreen) {
      currentSizeName = (sizes as any)[key];
      currentSizeVal = Number(key);
      NewSizes[(sizes as any)[key]] = true;
    } else {
      NewSizes[(sizes as any)[key]] = false;
    }
  }

  return { size: currentSizeName, val: currentSizeVal, sizes: NewSizes };
}

const screen = computed(() => {
  return getSize(windowWidth.value);
});
</script>
