// /Users/goldlabel/GitHub/flash/app/src/Uberedux/initialState.tsx
import pJSON from '../../../package.json';
// import { TState } from './types';
// import { initialState as crud } from './ELLA/crud/initialState';

export const initialState: any = {
  vs: pJSON.version,
  created_at: Date.now(),
};
