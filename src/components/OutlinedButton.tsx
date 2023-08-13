import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface OutlinedButtonProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  label: string; // Texto do botão
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
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
    fontWeight: 'bold',
    fontSize: '1.8vw',
    color: '#ffffff', 
    borderColor: useTheme().palette.primary.main, 
    borderWidth: '4px',
  };

  return (
    <Button variant="outlined" style={buttonStyles}>
      {label}
    </Button>
  );
};

export default OutlinedButton;
