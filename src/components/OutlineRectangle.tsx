import React from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface OutlinedRectangleProps {
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
  height?: string;
  borderColor?: string;
  borderWidth?: string;
}

const OutlinedRectangle: React.FC<OutlinedRectangleProps> = ({
  position = {},
  width = {},
  height,
  borderColor,
  borderWidth = '2px',
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

  const { transform, ...positionProps } = screenPosition;

  const rectangleStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height,
    borderRadius: '30px',
    border: `${borderWidth} solid ${borderColor}`,
  };

  return (
    <Box style={rectangleStyles}>
    </Box>
  );
};

export default OutlinedRectangle;
