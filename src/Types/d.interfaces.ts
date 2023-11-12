/* eslint-disable */

import type { NFT } from '@/interfaces/nftInterface';
declare global {
  enum Stone {
    water = 'water',
    lava = 'lava',
    rock = 'rock',
    algae = 'algae',
    bioluminescent = 'bioluminescent',
  }

  interface MarketNft {
    price: string;
    token: string;
    source: string;
    identifier: string;
    currentUsd: number;
  }

  interface NftStaking extends Nft {
    selected: boolean;
    state?: 'pending' | 'error' | 'success';
    txHash?: string;
  }

  type ExplorerView = 'minited' | 'all' | 'listed';
  interface Nft {
    id: number;
    stone: Stone;
    rank: number;
    name: string;
    rarity: string;
    image: string;
    price: string;
    isClaimed?: boolean;
    armor?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
    };
    background?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
    };
    crown?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
    };
    weapon?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
    };
    eyes?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
      description: string;
    };
    hairstyle?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
      description: string;
    };
    mouth?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
      description: string;
    };
    nose?: {
      level: number;
      name: string;
      rarity: number;
      url: string;
      description: string;
    };
    vril?: number;
    market?: MarketNft;
  }

  interface NftMaket extends Nft {
    market: MarketNft;
  }

  interface NftCategory {
    stone: string;
    armor: string;
    crown: string;
    weapon: string;
    eyes: string;
    background: string;
    mouth: string;
  }

  interface NftFiltres extends NftCategory {
    eyesColor: string;
    hairstyleColor: string;
  }
  interface SortList {
    label: string;
    value: 'idasc' | 'iddesc' | 'rankasc' | 'rankdesc' | 'priceasc' | 'pricedesc' | 'rank' | 'Sort by';
    sort?: string;
    order?: string;
  }
}

interface DatasPoolsApi {
  pools: {
    smartContractAdress: string;
    title: string;
    description: string;
    rewardType: string;
    rewardText: string;
    rewardTotal: number;
    missionEndText: string;
    totalGuardiansStaked: number;
    maxNftToStake: number;
    lockTimeMission: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
    premissionStart: number;
    premissionEnd: number;
    missionEnd: number;
    status: string;
  }[];
  totalCount: number;
  pageCount: number;
}

interface Pools {
  smartContractAdress: string;
  title: string;
  description: string;
  rewardType: string;
  rewardText: string;
  rewardTotal: number;
  missionEndText: string;
  totalGuardiansStaked: number;
  maxNftToStake: number;
  lockTimeMission: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  premissionStart: number;
  premissionEnd: number;
  missionEnd: number;
  status: string;
}

interface Lootboxe {
  assetType?: string;
  balance: number;
  collectionName: string;
  id: number;
  idName: string;
  identifier: string;
  isClaimed: boolean;
  rank: number;
  viewed: number;
}
interface Asset {
  collectionName: string,
  id: number,
  armor: {
    name: string,
    url: string,
    vril: number,
    level: number
  },
  assetType: string,
  idName: string,
  identifier: string,
  isClaimed: false,
  stone: string,
  viewed: number,
  vril: number
}

interface Ticket {
  balance: number
  collectionName: string
  id: number
  idName: string
  identifier: string
  isClaimed: boolean
  rank: number
  viewed: number
}

export type {
  Asset,
  DatasPoolsApi,
  Pools,
  Lootboxe,
  Ticket
};
