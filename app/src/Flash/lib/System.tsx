// ella/next/src/gl-core/cartridges/System/System.tsx
'use client';
import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { 
  subMUITheme, 
  useSystem, 
  setSystemKey,
  useConfig,
  usePrefersColorScheme, 
  useDispatch,
} from '../../Flash';

type TSystemProps = {
  children?: React.ReactNode;
};

export default function System({ 
  children = null,
}: TSystemProps) {
  const dispatch = useDispatch();
  const { themeMode } = useSystem();
  const { themes } = useConfig();
  const systemColor = usePrefersColorScheme();

  // Set themeMode to system preference on first mount if not already set
  React.useEffect(() => {
    if (!themeMode) {
      dispatch(setSystemKey('themeMode', systemColor));
    }
  }, [themeMode, systemColor, dispatch]);

  // if (themeMode) return null;

  const theme = themes[themeMode]
  const newTheme = subMUITheme(theme);

  return (
    <ThemeProvider theme={newTheme}>
      <CssBaseline />
      {/* Debugging: */}
      {/* <pre>{JSON.stringify({ themeMode, systemColor, themes }, null, 2)}</pre> */}
      {children}
    </ThemeProvider>
  );
}
