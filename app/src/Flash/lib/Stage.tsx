// /app/src/Flash/components/Stage.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TStage } from '../types';

export default React.forwardRef<HTMLDivElement, TStage>(function Stage(
  { id, width, height, children },
  ref
) {
  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid red',
        // let Stage shrink within its container, but never exceed config
        maxWidth: width,
        maxHeight: height,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
});
