// /Users/goldlabel/GitHub/flash/app/src/Uberedux/initialState.tsx
import { TState } from './types';
import config from './config.json';

export const initialState: TState = {
  config,
  created: Date.now(),
  cartridge: 'flash',
  clips: [],
};
