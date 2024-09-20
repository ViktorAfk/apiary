import { LoginForm } from '@/components/Form/login/LoginForm';
import { Container, Typography } from '@mui/material';

export const LoginContainer: React.FC = () => {
  return (
    <Container
      sx={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        color={'primary'}
        variant={'h1'}
        sx={{ fontSize: '36px', marginBottom: '20px' }}
      >
        {'HoneyFarm'}
      </Typography>
      <LoginForm />
    </Container>
  );
};
