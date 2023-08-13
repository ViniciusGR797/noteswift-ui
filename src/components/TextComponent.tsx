import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TextComponentProps {
  fontSize?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  text: string; // Texto a ser exibido
}

const TextComponent: React.FC<TextComponentProps> = ({
  fontSize = '2vw',
  position = {},
  text,
}) => {
  const { transform, ...positionProps } = position;

  const textStyles: React.CSSProperties = {
    fontSize,
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: useTheme().palette.secondary.main,
  };

  return (
    <Box style={textStyles}>
      {text}
    </Box>
  );
};

export default TextComponent;
