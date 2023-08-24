import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment, useMediaQuery, Theme, Box, Skeleton, FormHelperText, Tooltip } from '@mui/material';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

interface TextFieldIconProps {
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
  height?: string;
  label?: string;
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
  name?: string;
  helperText?: string;
  type?: string;
  icon?: React.ReactElement<InputAdornmentProps['children']>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldIcon: React.FC<TextFieldIconProps> = ({
  fontSize = {},
  width = {},
  height,
  label,
  type = 'text',
  icon,
  onChange,
  position = {},
  helperText,
  name,
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

  const helperTextStyles: React.CSSProperties = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  };

  const textFieldStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    width: screenWidth,
    height,
  };

  const skeletonStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    width: screenWidth,
    height,
  };

  return (
    <Box>
      {isDataLoaded ? (
        <>
          <Tooltip title={helperText}>
            <TextField
              required
              name={name}
              label={label}
              variant='outlined'
              type={type}
              onChange={onChange}
              error={!!helperText}
              helperText={
                <FormHelperText sx={helperTextStyles}>
                  {helperText}
                </FormHelperText>
              }
              style={textFieldStyles}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {icon}
                  </InputAdornment>
                ),
                style: { fontSize: font },
                inputProps: { maxLength: 254 }
              }}
            />
          </Tooltip>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" style={skeletonStyles} />
        </>
      )}
    </Box>
  );
};

export default TextFieldIcon;
