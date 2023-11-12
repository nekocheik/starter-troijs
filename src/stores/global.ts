import { defineStore } from 'pinia';

export const globalStore = defineStore('global', {
  state: (): {
    walletErd: string;
    accessTokenSso: string;
    eventStorage: { [key: string]: { onSend: (arg: any) => unknown; onSuccess: (arg: any) => unknown; onFail: (data: any) => unknown } };
    trash: {
      [key: string]: unknown;
    };
  } => {
    return {
      accessTokenSso: '',
      walletErd: '',
      eventStorage: {},
      trash: {},
    };
  },
  persist: true,
  actions: {},
});
