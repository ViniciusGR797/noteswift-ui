import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface BoxComponentProps {
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
  width?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  height?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  isCenter?: boolean;
  children: ReactNode;
}

const BoxComponent: React.FC<BoxComponentProps> = ({
  position = {},
  width = {},
  height = {},
  isCenter = false,
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const screenPosition = position ? JSON.parse(JSON.stringify(position)) : {};

  screenPosition.top = smDown ? position.top?.sm : position.top?.md;
  screenPosition.bottom = smDown ? position.bottom?.sm : position.bottom?.md;
  screenPosition.left = smDown ? position.left?.sm : position.left?.md;
  screenPosition.right = smDown ? position.right?.sm : position.right?.md;
  screenPosition.transform = smDown ? position.transform?.sm : position.transform?.md;
  const screenWidth = smDown ? width.sm : mdDown ? width.md : width.lg;
  const screenHeight = smDown ? height.sm : mdDown ? height.md : height.lg;

  const { transform, ...positionProps } = screenPosition;

  const boxStylesBase: React.CSSProperties = {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    ...positionProps,
    // background: '#008000',
  };
  
  const boxStylesCentered: React.CSSProperties = {
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const boxStyles = isCenter ? { ...boxStylesBase, ...boxStylesCentered } : boxStylesBase;

  return (
    <Box style={boxStyles}>
        {children}
    </Box>
  );
};

export default BoxComponent;
