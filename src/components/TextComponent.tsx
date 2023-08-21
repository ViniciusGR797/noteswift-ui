import React, { useEffect, useState } from 'react';
import { Box, Skeleton, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TextComponentProps {
  fontSize?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  width?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  color?: string;
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
  text: string;
  fontWeight?: string;
  textAlign?: string;
  isCenter?: boolean;
  helperText?: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  fontSize = {},
  width = {},
  color,
  position = {},
  text,
  fontWeight,
  textAlign,
  isCenter = false,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const screenPosition = position ? JSON.parse(JSON.stringify(position)) : {};

  const font = smDown ? fontSize.sm : mdDown ? fontSize.md : fontSize.lg;
  screenPosition.top = smDown ? position.top?.sm : position.top?.md;
  screenPosition.bottom = smDown ? position.bottom?.sm : position.bottom?.md;
  screenPosition.left = smDown ? position.left?.sm : position.left?.md;
  screenPosition.right = smDown ? position.right?.sm : position.right?.md;
  screenPosition.transform = smDown ? position.transform?.sm : position.transform?.md;
  const screenWidth = smDown ? width.sm : mdDown ? width.md : width.lg;

  const { transform, ...positionProps } = screenPosition;
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 800);
  }, []);

  const textStylesBase: React.CSSProperties = {
    fontSize: font,
    color,
    fontWeight,
    width: screenWidth,
    position: 'absolute',
    ...positionProps,
    textAlign,
  };
  
  const textStylesCentered: React.CSSProperties = {
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const textStyles = isCenter ? { ...textStylesBase, ...textStylesCentered } : textStylesBase;
  
  const skeletonStylesBase: React.CSSProperties = {
    fontSize: font,
    color,
    fontWeight,
    width: screenWidth,
    position: 'absolute',
    ...positionProps,
    textAlign,
  };

  const skeletonStyles = isCenter ? { ...skeletonStylesBase, ...textStylesCentered } : skeletonStylesBase;

  return (
    <Box>
      {isDataLoaded ? (
        <Box style={textStyles}>
          {text}
        </Box>
      ) : (
        <>
          <Skeleton style={skeletonStyles} />
        </>
      )}
    </Box>
  );
};

export default TextComponent;
