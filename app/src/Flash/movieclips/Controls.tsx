// /Users/goldlabel/GitHub/flash/app/src/Flash/movieclips/Controls.tsx
import React from 'react';
import { 
    Box,
    IconButton,
} from '@mui/material';
import { Icon } from '../../Flash';

export default function Controls({ 
  id,
}: any) {
  return (
    <Box 
      id={id} 
      sx={{ 
        display: 'flex',
        // border: '1px solid red',
      }}
    >
        <Box sx={{flexGrow:1}}/>
        <IconButton
            color="primary"
            onClick={() => {

            }}>
            <Icon icon="reset" />
        </IconButton>
    </Box>
  );
}
