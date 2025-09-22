// ella/next/src/gl-core/cartridges/System/System.tsx
'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { subMUITheme } from '../../Flash';

export default function System({ 
  theme, 
  children = null,
}: any) {
  const newtheme = subMUITheme(theme);
  return <ThemeProvider theme={newtheme}>{children}</ThemeProvider>;
}
