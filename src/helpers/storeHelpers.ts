import { globalStore } from '@/stores/global';
import { snackbar } from '@/stores/modules/snackbar';

class $Store {
  snackbar = snackbar;
  global = globalStore;
}

const $store = new $Store();
export { $store };
