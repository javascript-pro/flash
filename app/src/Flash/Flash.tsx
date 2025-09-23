// /app/src/Flash/Flash.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TFlashConfig } from './types';
import {
  UbereduxProvider,
  System,
  Stage, 
  MovieClip,
  Bolt,
} from '../Flash';
import ActionScript from './actionscript';

export default function Flash({ config = {} }: { config?: TFlashConfig }) {
  const { width = 300, height = 200 } = config;
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  
  React.useEffect(() => {
      const flash = new ActionScript(stageRef.current);
      flash.setup("mc_bolt", { speed: 5 });
  }, []);

  return (
    <UbereduxProvider>
      <System>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Stage id="intro" width={width} height={height} ref={stageRef}>
            <MovieClip id="mc_bolt">
              <Bolt />
            </MovieClip>
          </Stage>
        </Box>
      </System>
    </UbereduxProvider>
  );
}


/* 
  <MovieClip 
    border
    id="mc_trace"
    width={42} 
    height={42}>
    <Trace />
  </MovieClip> 
*/