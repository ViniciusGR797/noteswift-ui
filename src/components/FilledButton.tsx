import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FilledButtonProps {
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
    width: '25%', 
    height: '10%',
    borderRadius: '50px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.8vw',
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
