// /app/src/Flash/Flash.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TFlashConfig } from './types';
import { Trace, Stage, MovieClip, Macromedia, Pingpongball, UbereduxProvider } from '../Flash';
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
        <Stage id="stage_1" width={width} height={height} ref={stageRef}>
          <MovieClip id="mc_macromedia">
            <Macromedia />
          </MovieClip>

          <MovieClip id="mc_pingpongball">
            <Pingpongball />
          </MovieClip>

          <MovieClip id="mc_trace">
            <Trace />
          </MovieClip>
        </Stage>
      </Box>
    </UbereduxProvider>
  );
}
