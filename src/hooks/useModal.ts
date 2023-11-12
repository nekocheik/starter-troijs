import { useRoute, useRouter } from 'vue-router';
import type { LocationQueryValue, LocationQuery } from 'vue-router';

type Modals = 'WalletMaiar' | 'SelectStakingGuardian' | 'Claim' | 'modalConnexion' | 'overviewGuardians' | 'claimdialogrotg' | 'ROTG' | 'guardian' | 'claimLootbox' | 'NewItems' | 'SplitGuardian';

export function useModal() {
  const router = useRouter(),
    route = useRoute();

  const close = () => {
    const query = { ...route.query };
    delete query.modalOpen;
    delete query.nft;

    router.replace({
      query,
    });
  };

  const open = (modal: Modals, querys: { [index: string]: string | LocationQuery | LocationQueryValue | LocationQueryValue[] } = {}): void => {
    router
      .push({
        query: {
          modalOpen: modal,
          ...querys,
        },
      })
      .then(() => {
        router.replace(route.fullPath);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const scopScript = (name: string, script: Function) => {
    watch(route.query, (query) => {
      if (query.modalOpen == name) {
        script();
      }
    });
  };

  return {
    close,
    open,
    scopScript,
  };
}

export default useModal;
