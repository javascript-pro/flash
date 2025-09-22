// /Users/goldlabel/GitHub/flash/app/src/Flash/types.d.ts
import React from 'react';

export type TState = {
  [key: string]: any;
}

export type TMovieClip = {
  id?: string;
  children?: React.ReactNode;
  border?: boolean;
  color?: string;
};

export type TTrace = {
  children?: React.ReactNode;
};

export type TFlashConfig = {
  width?: number | string;
  height?: number | string;
  [key: string]: any;
};

export type TStage = {
  id?: string;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
};


