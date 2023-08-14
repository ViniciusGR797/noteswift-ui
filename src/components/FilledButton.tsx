import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FilledButtonProps {
  width?: string, 
  height?: string,
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  label: string; // Texto do botão
}

const FilledButton: React.FC<FilledButtonProps> = ({
  width, 
  height,
  position = {},
  label,
}) => {
  const { transform, ...positionProps } = position;

  const buttonStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    color: '#ffffff', 
    backgroundColor: useTheme().palette.primary.main, 
  };

  return (
    <Button variant="contained" style={buttonStyles}>
      {label}
    </Button>
  );
};

export default FilledButton;
