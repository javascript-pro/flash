// /Users/goldlabel/GitHub/flash/app/src/Flash/components/MovieClip.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TMovieClip } from '../types';

export default function MovieClip({ id, children, border }: TMovieClip) {
  return (
    <Box
      id={id}
      sx={{
        ...(border && { border: '1px solid red' }),
      }}
    >
      {children}
    </Box>
  );
}
