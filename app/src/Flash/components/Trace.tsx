// /Users/goldlabel/GitHub/flash/app/src/Flash/components/Trace.tsx
import React from 'react';
import { Box } from '@mui/material';
import { TTraceProps } from '../types';
import { 
  IconButton,
} from '@mui/material';
import { Icon } from '../../Flash';

export default function Trace({ children }: TTraceProps) {
  // if (!children) return null;

  return (
    <Box id="trace">
      <IconButton>
        <Icon icon="fingerprint" color="primary" />
      </IconButton>
      {children}
    </Box>
  );
}
