import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDarkMode } from '../contexts/DarkModeContext';

interface DarkModeToggleButtonProps {
  isDarkModeButtonTopRight: boolean;
}

const DarkModeToggleButton: React.FC<DarkModeToggleButtonProps> = ({ isDarkModeButtonTopRight }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const buttonStyle: React.CSSProperties = {
    color: 'secondary.main',
    position: 'fixed',
    bottom: isDarkModeButtonTopRight ? 'auto' : '2%',
    top: isDarkModeButtonTopRight ? '2%' : 'auto',
    right: isDarkModeButtonTopRight ? '2%' : 'auto',
    left: isDarkModeButtonTopRight ? 'auto' : '2%',
  };

  return (
      <IconButton color="inherit" onClick={toggleDarkMode} style={buttonStyle}>
        <Brightness4Icon />
      </IconButton>
  );
};

export default DarkModeToggleButton;