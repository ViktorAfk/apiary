'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputField } from '../InputField';

const schema = z
  .object({
    email: z.string().email().min(5),
    name: z.string().min(1),
    password: z.string().min(8),
  })
  .required();

type FormData = z.infer<typeof schema>;

export const LoginForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });
  const onHandleSubmit = handleSubmit(() => {});

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      component={'form'}
      onSubmit={onHandleSubmit}
    >
      <InputField<FormData>
        textFieldProps={{ variant: 'outlined', label: 'Name' }}
        controller={{ control, name: 'name' }}
      />
      <InputField<FormData>
        textFieldProps={{
          variant: 'outlined',
          label: 'Email',
          type: 'email',
        }}
        controller={{ control, name: 'email' }}
      />
      <InputField<FormData>
        textFieldProps={{
          variant: 'outlined',
          label: 'Password',
          type: 'password',
        }}
        controller={{ control, name: 'password' }}
      />
      <ButtonGroup>
        <Button sx={{ width: '100%' }} type={'submit'}>
          {'Login'}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
