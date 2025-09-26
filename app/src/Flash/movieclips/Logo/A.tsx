// /Users/goldlabel/GitHub/core/gl-core/cartridges/Flash/movieclips/logo/A.tsx
import React from 'react';
import { TMovieClip } from '../../types';
import { useTheme } from '@mui/material';

export default function A({ ...props }: TMovieClip) {
  const theme = useTheme();
  const frontColor = theme.palette.primary.main;

  return (  
  <svg width="200px" height="400px" viewBox="0 0 200 400">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="bolt">
            <polygon fill="#001321" points="99.7984778 3.93120393 23.6453202 188.133201 95.7904165 188.133201 55.7098074 380.34398 200 144.084897 127.854903 144.084897 171.943573 3.93120393"></polygon>
            <polygon fill="#2F69A8" points="93.8871473 3.93120393 17.7339901 188.133201 89.8790864 188.133201 49.7984773 380.34398 194.08867 144.084897 121.943573 144.084897 166.032243 3.93120393"></polygon>
            <polygon fill={frontColor} fillRule="nonzero" points="76.046798 0 0 184 80.0492611 184 36.0221675 400 192.118227 136 112.068966 136 156.096059 0"></polygon>
        </g>
    </g>
</svg>

  );
}
