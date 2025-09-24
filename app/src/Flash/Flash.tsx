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
  Controls,
  Text,
} from '../Flash';
import ActionScript from './actionscript';

export default function Flash({ config = {} }: { config?: TFlashConfig }) {
  const { width = 300, height = 200 } = config;
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  
  React.useEffect(() => {
      const flash = new ActionScript(stageRef.current);
      flash.setup("mc_bolt", { speed: 3 });
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
            <MovieClip id="mc_controls" height={50} zIndex={15}>
              <Controls />
            </MovieClip>

            <MovieClip id="mc_bolt" height={50} zIndex={5}>
              <Bolt />
            </MovieClip>

            <MovieClip width={350} id="mc_text" zIndex={10}>
              <Text 
                id="text_hello"
                text="Hello Flash!"
                variant="h4"
                color="gold"
                fontFamily="Arial"
                split="chars"
              />
            </MovieClip>
          </Stage>

        </Box>
      </System>
    </UbereduxProvider>
  );
}
