import React from 'react';
import { Box } from '@mui/material';

interface FilledRectangleProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  width?: string;
  height?: string;
  backgroundColor?: string;
  opacity?: number;
}

const FilledRectangle: React.FC<FilledRectangleProps> = ({
  position = {},
  width = '80%',
  height = '60%',
  backgroundColor = 'rgba(255, 255, 255, 0.2)',
  opacity = 1,
}) => {
  const { transform, ...positionProps } = position;

  const rectangleStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    borderRadius: '50px',
    backgroundColor,
    opacity,
  };

  return (
    <Box style={rectangleStyles}>
    </Box>
  );
};

export default FilledRectangle;
