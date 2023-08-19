import React from 'react';
import { Box } from '@mui/material';

interface OutlinedRectangleProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  width?: string;
  height?: string;
  borderColor?: string;
  borderWidth?: string;
}

const OutlinedRectangle: React.FC<OutlinedRectangleProps> = ({
  position = {},
  width = '80%',
  height = '60%',
  borderColor = '#000',
  borderWidth = '2px',
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
    border: `${borderWidth} solid ${borderColor}`,
  };

  return (
    <Box style={rectangleStyles}>
    </Box>
  );
};

export default OutlinedRectangle;
