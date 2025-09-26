// /Users/goldlabel/GitHub/core/gl-core/cartridges/Flash/movieclips/logo/A.tsx
import React from 'react';
import { TMovieClip } from '../../types';
import { useTheme } from '@mui/material';

export default function A({ ...props }: TMovieClip) {
  const theme = useTheme();
  const frontColor = theme.palette.primary.main;

  return (  
  <svg width="166px" height="250px" viewBox="0 0 166 250">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="A">
            <path d="M4.04878049,250 L85.0243902,7.08502024 L166,250 L100.207317,250 L85.0243902,194.331984 L59.7195122,194.331984 L44.5365854,250 L4.04878049,250 Z M69.8414634,153.846154 L85.0243902,103.238866 L100.207317,153.846154 L69.8414634,153.846154 Z" id="A_black" fill="#FF0000"></path>
            <path d="M0,242.91498 L80.9756098,0 L161.95122,242.91498 L96.1585366,242.91498 L80.9756098,187.246964 L55.6707317,187.246964 L40.4878049,242.91498 L0,242.91498 Z M65.7926829,146.761134 L80.9756098,96.1538462 L96.1585366,146.761134 L65.7926829,146.761134 Z" id="A_white" fill={frontColor}></path>
        </g>
    </g>
  </svg>
  );
}
