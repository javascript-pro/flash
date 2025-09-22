// /app/src/Flash/components/Stage.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TStage } from '../types';

export default function Stage({ id, width, height, children }: TStage) {
  return (
    <Box
      id={id}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid red',
        width: width,
        height: height,
        maxWidth: width,
        maxHeight: height,
      }}
    >
      {children}
    </Box>
  );
}
