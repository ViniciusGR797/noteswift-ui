import React, { useEffect, useState } from 'react';
import { Box, Skeleton, Theme, useMediaQuery } from '@mui/material';
import Logo from '../assets/Logo.png';
import LogoShort from '../assets/LogoShort.png';
import { useTheme } from '@mui/material/styles';

interface LogoBoxProps {
  size?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  height?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  position?: {
    top?: {
      sm?: string;
      md?: string;
    },
    bottom?: {
      sm?: string;
      md?: string;
    },
    left?: {
      sm?: string;
      md?: string;
    },
    right?: {
      sm?: string;
      md?: string;
    },
    transform?: {
      sm?: string;
      md?: string;
    };
  };
  isShort?: boolean;
}

const LogoBox: React.FC<LogoBoxProps> = ({
  size = {},
  height = {},
  position = {},
  isShort = false, // Defina o valor padrão como false
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const screenPosition = position ? JSON.parse(JSON.stringify(position)) : {};

  const screenSize = smDown ? size.sm : mdDown ? size.md : size.lg;
  screenPosition.top = smDown ? position.top?.sm : position.top?.md;
  screenPosition.bottom = smDown ? position.bottom?.sm : position.bottom?.md;
  screenPosition.left = smDown ? position.left?.sm : position.left?.md;
  screenPosition.right = smDown ? position.right?.sm : position.right?.md;
  screenPosition.transform = smDown ? position.transform?.sm : position.transform?.md;
  const imageHeight = smDown ? height.sm : mdDown ? height.md : height.lg;

  const { transform, ...positionProps } = screenPosition;
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const currentLogoSource = isShort ? LogoShort : Logo;

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 800);
  }, []);

  const logoStyles: React.CSSProperties = {
    width: screenSize,
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
    opacity: 0.8,
  };

  const skeletonStyles: React.CSSProperties = {
    width: screenSize,
    height: imageHeight,
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box>
      {isDataLoaded ? (
        <>
          <Box style={logoStyles}>
            <img src={currentLogoSource} alt="Logo" style={imageStyles} />
          </Box>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" style={skeletonStyles} />
        </>
      )}
    </Box>
  );

};

export default LogoBox;
