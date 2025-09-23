// /app/src/Flash/Flash.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TFlashConfig } from './types';
import { 
  UbereduxProvider,
  // Trace, 
  Stage, 
  MovieClip,
  Bolt,
} from '../Flash';
import ActionScript from './actionscript';

export default function Flash({ config = {} }: { config?: TFlashConfig }) {
  const { width = 300, height = 200 } = config;
  const stageRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (stageRef.current) {
      const flash = new ActionScript(stageRef.current);
      flash.init();
    }
  }, []);

  return (
    <UbereduxProvider>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Stage id="stage_intro" width={width} height={height} ref={stageRef}>
          
          <MovieClip 
            // border 
            id="mc_bolt" 
            // width={200} 
            // height={400}
          >
            <Bolt />
          </MovieClip>
          
          {/* <MovieClip 
            border
            id="mc_trace"
            width={42} 
            height={42}>
            <Trace />
          </MovieClip> */}
        </Stage>
      </Box>
    </UbereduxProvider>
  );
}
