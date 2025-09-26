// /app/src/Flash/movieclips/Logo/Logo.tsx
import React from 'react';
import { 
  MovieClip,
  Bolt,
  A,
} from '../../../Flash';

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
        <Bolt id="mc_bolt" />
        <A id="ma_A" />
      </MovieClip>
    </>
  );
}
