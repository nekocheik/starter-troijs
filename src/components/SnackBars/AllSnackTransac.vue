<template>
  <Transition name="translate-right">
    <ASnackBarWrapper v-if="store.open.all || store.transacs.length >= 1" name="all" class="mt-4 !bg-blue-800">
      <template #transaction> <p class="capitalize text-b0 font-extrabold">Transaction</p></template>
      <template #processed>
        <p class="text-b2 font-semibold px-[28px]">{{ transactionsValidate }} / {{ store.allTransaction.length }} processed</p>
      </template>
      <section class="pt-4 max-h-[280px] overflow-y-scroll hide-scroll-bar">
        <TransactionRow v-for="(transaction, idx) in store.allTransaction" :key="idx" :transaction="transaction" />
      </section>
    </ASnackBarWrapper>
  </Transition>
</template>

<script lang="ts" setup>
import snackbar from '@/stores/modules/snackbar';
const store = snackbar();
const transactionsValidate = computed<number>(() => store.allTransaction.filter((transaction) => transaction.status === 'success' || transaction.status === 'error').length);

onMounted(() => {
  $busEvent.on('loadGuardiansInMission', () => {
    store.open.all = true;
  });
});
</script>

<style scoped>
.translate-right-enter-active,
.translate-right-leave-active {
  transition: all 0.5s ease;
}

.translate-right-enter-from,
.translate-right-leave-to {
  transform: translateX(200px);
  opacity: 0;
  @media screen and (max-width: 1300px) {
    transform: translateX(0px);
    transform: translateY(100px);
  }
}
</style>
