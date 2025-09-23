// /app/src/Flash/components/Stage.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TStage } from '../types';
import { useRedux} from '../';

export default React.forwardRef<HTMLDivElement, TStage>(function Stage(
  { id, width, height, children },
  ref
) {
  const s = useRedux();
  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #60A5FA',
        // let Stage shrink within its container, but never exceed config
        maxWidth: width,
        maxHeight: height,
        width: '100%',
        height: '100%',
      }}
    >
      <pre>s: {JSON.stringify(s, null, 2)}</pre>
      {children}
    </Box>
  );
});
