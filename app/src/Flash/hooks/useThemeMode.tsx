// /Users/goldlabel/GitHub/flash/app/src/Flash/hooks/useThemeMode.tsx
/*
    Hook returning theme mode "light" | "dark"
*/
import { useSelector } from 'react-redux';
import { TRootState } from '../types';

export function useThemeMode(): 'light' | 'dark' {
  return useSelector((state: TRootState) => state.redux.settings.themeMode as any);
}