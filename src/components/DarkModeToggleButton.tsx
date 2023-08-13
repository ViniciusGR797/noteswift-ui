import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useTheme } from '@mui/material/styles';

interface DarkModeToggleButtonProps {
  isDarkModeButtonTopRight: boolean;
}

const DarkModeToggleButton: React.FC<DarkModeToggleButtonProps> = ({ isDarkModeButtonTopRight }) => {
  const { toggleDarkMode } = useDarkMode();

  const buttonStyle: React.CSSProperties = {
    color: useTheme().palette.secondary.main,
    position: 'fixed',
    bottom: isDarkModeButtonTopRight ? 'auto' : '2%',
    top: isDarkModeButtonTopRight ? '2%' : 'auto',
    right: isDarkModeButtonTopRight ? '2%' : 'auto',
    left: isDarkModeButtonTopRight ? 'auto' : '2%',
  };

  return (
      <IconButton color="inherit" onClick={toggleDarkMode} style={buttonStyle}>
        <Brightness4Icon style={{ fontSize: '2vw' }}/>
      </IconButton>
  );
};

export default DarkModeToggleButton;
