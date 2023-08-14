import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

const Loading: React.FC = () => {
  const loadingStyles: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  return (
    <Box style={loadingStyles}>
      <CircularProgress size={'10vh'} thickness={4} />
      <Typography color={useTheme().palette.text.primary} style={{ fontSize: '2.2vw', marginTop: 10 }}>
        Carregando...
      </Typography>
    </Box>
  );
};

export default Loading;
