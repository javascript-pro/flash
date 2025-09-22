// ella/next/src/gl-core/cartridges/Uberedux/actions/reset.tsx

import { TUbereduxDispatch } from '../types';
import {
  resetUberedux,
  setUbereduxKey,
} from '../';

/**
 * Resets the entire Uberedux slice back to initialState,
 * then waits 333ms and redirects the browser to "/admin".
 */
export const reset = () => async (dispatch: TUbereduxDispatch) => {
  try {
    // reset  Uberedux
    dispatch(resetUberedux());

    // after 333ms, redirect to "/admin"
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.replace('/');
      }
    }, 250);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    dispatch(setUbereduxKey({ key: 'error', value: msg }));
  }
};
