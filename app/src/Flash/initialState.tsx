// /Users/goldlabel/GitHub/flash/app/src/Uberedux/initialState.tsx
import pJSON from '../../package.json';
import { TState } from './types';

export const initialState: TState = {
  vs: pJSON.version,
  created: Date.now(),
  cartridge: 'flash',
  clips: [],
};
