import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <AppBar color={'primary'}>
        <Container maxWidth={'xl'}>
          <Toolbar
            variant={'regular'}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant={'h6'} color={'white'}>
              {'HoneyFarm'}
            </Typography>
            <Link href={'/login'} sx={{ color: 'white' }}>
              {'Login'}
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </main>
  );
}
