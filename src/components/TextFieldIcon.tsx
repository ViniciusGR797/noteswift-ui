import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

interface TextFieldIconProps {
  label?: string;
  type?: string;
  icon?: React.ReactElement<InputAdornmentProps['children']>; // Correção na definição do ícone
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
}

const TextFieldIcon: React.FC<TextFieldIconProps> = ({
  label,
  type = 'text',
  icon,
  onChange,
  position = {},
}) => {
  const { transform, ...positionProps } = position;

  const textFieldStyles: React.CSSProperties = {
    position: 'absolute',
    ...positionProps,
    transform,
    width: '25%', 
  };

  return (
    <TextField
      required
      label={label}
      variant='outlined'
      margin='normal'
      type={type}
      onChange={onChange}
      style={textFieldStyles}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextFieldIcon;
