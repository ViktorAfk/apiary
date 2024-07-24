import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import {
  Controller,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  controller: UseControllerProps<T, Path<T>>;
  textFieldProps: TextFieldProps;
}

export const InputField = <T extends FieldValues>({
  controller,
  textFieldProps,
}: InputFieldProps<T>) => {
  return (
    <Controller
      {...controller}
      render={({ field }) => <TextField {...textFieldProps} {...field} />}
    />
  );
};
