import { snackbar } from '@/stores/modules/snackbar';
import type { Transaction } from '@/stores/modules/snackbar';

type OptionsStatus = {
  '': string;
  send: string;
  loading: string;
  pending: string;
  start: string;
  fail: string;
  success: string;
};

export const useNotification = () => {
  const snackbarStore = snackbar();

  const optionsStatus: OptionsStatus = {
    '': 'loading',
    send: 'loading',
    loading: 'loading',
    pending: 'loading',
    start: 'loading',
    fail: 'error',
    success: 'success',
  };

  function getStatus(status: keyof OptionsStatus) {
    return (optionsStatus[status] as Transaction['status']) || 'loading';
  }
  console.log(getStatus, snackbarStore);
};

export default useNotification;
