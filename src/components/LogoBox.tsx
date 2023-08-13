import React from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/Logo.png';

interface LogoBoxProps {
  size?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
}

const LogoBox: React.FC<LogoBoxProps> = ({
  size = '100px',
  position = {},
}) => {
    const currentLogoSource = Logo;

  const { transform, ...positionProps } = position;

  const logoStyles: React.CSSProperties = {
    width: size,
    height: 'auto',
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyles: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity:  0.8,
  };

  return (
    <Box style={logoStyles}>
      <img src={currentLogoSource} alt="Logo" style={imageStyles} />
    </Box>
  );
};

export default LogoBox;
