// /Users/goldlabel/GitHub/flash/app/src/Flash/movieclips/Controls.tsx
import React from 'react';
import { 
  Box,
  IconButton,
} from '@mui/material';
import { 
  Icon, 
  useDispatch, 
  useSystem, 
  setSystemKey, 
  setFlashKey,
} from '../../Flash';

export default function Controls({ id }: any) {
  const dispatch = useDispatch();
  const s = useSystem();
  const { themeMode } = s;

  const toggleTheme = () => {
    dispatch(setSystemKey("themeMode", themeMode === "light" ? "dark" : "light"));
  };

  return (
    <Box 
      id={id} 
      sx={{ 
        display: 'flex',
        // border: '1px solid red',
      }}
    >
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        color="primary"
        onClick={toggleTheme}
      >
        <Icon icon={themeMode === "light" ? "darkmode" : "lightmode"} />
      </IconButton>
      <IconButton
        color="primary"
        onClick={() => {
          // TODO: implement reset
          dispatch(setFlashKey("resetRequested", true));
        }}
      >
        <Icon icon="reset" />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
}
