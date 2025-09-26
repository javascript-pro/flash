// /app/src/Flash/movieclips/Logo/Logo.tsx
import React from 'react';
import { MovieClip } from '../../../Flash';

export type TLogo = {
  id: string;
};

export default function Logo({
  id = 'mc_logo',
}: TLogo) {
  return (
    <>
      <MovieClip 
        id={id}
        border
        height="auto"
        width="auto"
      >
        BOLT
      </MovieClip>
    </>
  );
}
