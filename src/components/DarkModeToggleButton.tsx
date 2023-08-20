import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useTheme } from '@mui/material/styles';
import { Skeleton, Theme, useMediaQuery } from '@mui/material';

interface DarkModeToggleButtonProps {
  isDarkModeButtonTopRight: boolean;
}

const DarkModeToggleButton: React.FC<DarkModeToggleButtonProps> = ({ isDarkModeButtonTopRight }) => {
  const { toggleDarkMode } = useDarkMode();
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const fontSize = smDown ? '1.5rem' : mdDown ? '1.8rem' : '2rem';

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 800);
  }, []);

  const buttonStyle: React.CSSProperties = {
    color: theme.palette.text.primary,
    position: 'fixed',
    bottom: isDarkModeButtonTopRight ? 'auto' : '12%',
    top: isDarkModeButtonTopRight ? '2%' : 'auto',
    right: isDarkModeButtonTopRight ? '2%' : 'auto',
    left: isDarkModeButtonTopRight ? 'auto' : '2%',
  };

  const skeletonStyles: React.CSSProperties = {
    width: fontSize,
    height: fontSize,
  };

  return (
    <IconButton color="inherit" onClick={toggleDarkMode} style={buttonStyle}>

      {isDataLoaded ? (
        <>
          <Brightness4Icon style={{ fontSize: fontSize }} />
        </>
      ) : (
        <>
          <Skeleton variant="circular" style={skeletonStyles} />
        </>
      )}
    </IconButton>
  );
};

export default DarkModeToggleButton;
