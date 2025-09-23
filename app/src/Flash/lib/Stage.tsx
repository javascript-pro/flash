// /app/src/Flash/components/Stage.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TStage } from '../types';
// import { useRedux} from '../';

export default React.forwardRef<HTMLDivElement, TStage>(function Stage(
  { 
    id, 
    width, 
    height, 
    children,
  },
  ref
) {
  // const s = useRedux();
  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        // border: '1px solid #e2e3e4ff',
        // background: 'white',
        position: 'relative',
        overflow: 'hidden',
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
