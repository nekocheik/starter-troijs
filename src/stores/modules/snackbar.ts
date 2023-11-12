import { defineStore } from 'pinia';

export interface Transaction {
  hash: string;
  status: 'loading' | 'success' | 'error';
}

export interface SnackbarState {
  open: { transac: boolean; errorStaking: boolean; confirmationUnstak: boolean; all: boolean };
  transacs: {
    type: string;
    status: Transaction['status'];
    currentTransaction: number;
    allTransaction: number;
    transactions: Array<Transaction>;
  }[];
  GuardianSelected?: NftStaking[];
}

export const snackbar = defineStore('snackbar', {
  state: (): SnackbarState => ({
    open: { transac: false, errorStaking: false, confirmationUnstak: false, all: false },
    transacs: [],
  }),
  getters: {
    getContent(): SnackbarState['transacs'] {
      return this.transacs;
    },
    allTransaction() {
      const transacs: { type: string; hash: string; status: 'loading' | 'success' | 'error' }[] = [];
      this.transacs.forEach((transac) => {
        transac.transactions.forEach((currTransac) => {
          transacs.push({
            ...currTransac,
            type: transac.type,
          });
        });
      });
      return transacs;
    },
  },
  actions: {
    // setStatus() {
    //   this.open = !this.open;
    // },
  },
});

export default snackbar;
