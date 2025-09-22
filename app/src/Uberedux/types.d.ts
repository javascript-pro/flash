// /Users/goldlabel/GitHub/flash/app/src/Uberedux/types.d.ts
import config from '../config.json';
import { TUbereduxDispatch, TRootState } from './cartridges/Uberedux/store';

export type TUserMode = 'mitarbeiter' | 'anwalt' | null;
export type TThemeMode = 'light' | 'dark' | null;
export type TState = {
  vs: string;
  feedback: TFeedback | null;
  appBarTitle: string;
  appBarDescription: string;
  created_at: number;
  app: string;
  settings: {
    vs: string;
    themes: typeof config.themes;
    themeMode: TThemeMode;
    tooltips?: boolean;
    drawerOpen?: boolean;
    tabelleIndex?: number;
    optionalOff?: boolean;
  };
  akte?: any;
  crud?: any;
  schema?: any;
  bus: any;
  formsBus: any;
  helperText?: TFeedback | null;
  crash?: TFeedback | null
};

export type TSeverity = 'success' | 'info' | 'warning' | 'error';

export type TFeedback = {
  severity?: TSeverity | null;
  title?: string | null;
  description?: string | null;
} | null;

export type TUbereduxState = {
  currentRoute: string;
  status: {
    level: TSeverity;
    message: string;
    hidden: boolean;
  };
  [key: string]: any;
};

export { TUbereduxDispatch, TRootState };
