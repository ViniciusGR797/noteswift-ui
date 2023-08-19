import React, { useEffect, useState } from 'react';
import { Box, Button, Skeleton, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FilledButtonProps {
  width?: string,
  height?: string,
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  label: string; // Texto do botão
}

const FilledButton: React.FC<FilledButtonProps> = ({
  width,
  height,
  position = {},
  label,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const screenPosition = position ? JSON.parse(JSON.stringify(position)) : {};

  const font = smDown ? '1rem' : mdDown ? '1.1rem' : '1.2rem';
  screenPosition.bottom = smDown ? '25%' : position.bottom;
  screenPosition.left = smDown ? '50%' : position.left;
  screenPosition.transform = smDown ? 'translate(-50%, -50%)' : 'translate(0, 0)';
  const screenWidth = smDown ? '35%' : width;

  const { transform, ...positionProps } = screenPosition;
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(true);
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
          <Skeleton variant="rectangular" width={100} height={50} style={skeletonStyles} />
        </>
      )}
    </Box>
  );
};

export default FilledButton;
