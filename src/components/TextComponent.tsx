import React, { useEffect, useState } from 'react';
import { Box, Skeleton, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TextComponentProps {
  fontSize?: {
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
}

const TextComponent: React.FC<TextComponentProps> = ({
  fontSize = {},
  color,
  position = {},
  text,
  fontWeight,
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
  const marginTop = smDown ? '0.2rem' : mdDown ? '0.3rem' : '0.8rem';
  const widthSkeleton = smDown ? '72%' : mdDown ? '62%' : '52%';

  const { transform, ...positionProps } = screenPosition;
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(true);
  }, []);

  const textStyles: React.CSSProperties = {
    fontSize: font,
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color,
    fontWeight,
    width: '80%',
  };

  const skeletonStyles: React.CSSProperties = {
    fontSize: font,
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight,
    width: widthSkeleton,
    height: font,
    marginTop: marginTop,
  };

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
