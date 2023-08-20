import React, { useEffect, useState } from 'react';
import { Box, Button, Skeleton, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FilledButtonProps {
  width?: {
    sm?: string;
    md?: string;
  };
  height?: string;
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
  fontSize?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  label: string; 
}

const FilledButton: React.FC<FilledButtonProps> = ({
  width = {},
  height,
  position = {},
  fontSize = {},
  label,
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
  const screenWidth = smDown ? width.sm : width.md;

  const { transform, ...positionProps } = screenPosition;
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 800);
  }, []);

  const buttonStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height,
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: font,
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
  };

  const skeletonStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height,
    borderRadius: '50px',
  };

  return (
    <Box>
      {isDataLoaded ? (
        <>
          <Button variant="contained" style={buttonStyles}>
            {label}
          </Button>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" style={skeletonStyles} />
        </>
      )}
    </Box>
  );
};

export default FilledButton;
