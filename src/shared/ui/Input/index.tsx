import React from 'react';
import { TextField, TextFieldProps, useTheme, Typography, Box, InputAdornment, CircularProgress } from '@mui/material';
import { Text } from '../Text';

type Props = TextFieldProps & {
  label: string;
  big?: boolean;
  helperText?: string;
  isLoading?: boolean;
};

export const Input: React.FC<Props> = ({
  label,
  big,
  disabled,
  placeholder,
  error,
  helperText,
  isLoading,
  ...props
}) => {
  const { palette } = useTheme();

  const autoFillColor = {
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 30px ${palette.secondary.dark} inset !important`,
      WebkitTextFillColor: `${palette.secondary.light} !important`,
    },
    '&:-webkit-autofill:hover': {
      WebkitBoxShadow: `0 0 0 30px ${palette.secondary.dark} inset !important`,
      WebkitTextFillColor: `${palette.secondary.light} !important`,
    },
    '&:-webkit-autofill:focus': {
      WebkitBoxShadow: `0 0 0 30px ${palette.secondary.dark} inset !important`,
      WebkitTextFillColor: `${palette.secondary.light} !important`,
    },
    '&:-webkit-autofill:active': {
      WebkitBoxShadow: `0 0 0 30px ${palette.secondary.dark} inset !important`,
      WebkitTextFillColor: `${palette.secondary.light} !important`,
    },
  };

  return (
    <Box sx={{ width: '100%', ...props.sx }}>
      <Text noWrap sx={{ color: 'secondary.dark', my: '3px', ml: '20px' }}>
        {label}
      </Text>
      <TextField
        fullWidth
        multiline={big ? true : false}
        minRows={6}
        helperText={error ? helperText : ''}
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: '10px',
            border: `2px solid ${palette.primary.main}`,
            pl: '10px',
            pr: isLoading ? '10px' : '20px',
          },
          '& .MuiFormHelperText-root': {
            lineHeight: 1,
            position: 'absolute',
            bottom: '-16px',
            color: '#c9473f',
          },
          '& .Mui-focused': {
            borderWidth: '2px !important',
          },
          '& .Mui-disabled': {
            color: 'info.main !important',
            WebkitTextFillColor: `${palette.secondary.light}`,
          },
          'input, textarea': {
            color: 'secondary.dark',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '16px',
            py: 0,
            px: 0,
            width: '100%',
            height: '34px',
            borderRadius: 'none',
            '&::placeholder': {
              opacity: 1,
              color: 'info.dark',
              lineHeight: '16px',
              fontFamily: 'Myriad Pro',
            },
            ...autoFillColor,
          },
          fieldset: {
            border: 'none !important',
          },
        }}
        {...props}
      />
    </Box>
  );
};
