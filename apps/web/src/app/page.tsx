import { AppBar, Link, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <AppBar color={'primary'}>
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
      </AppBar>
    </main>
  );
}
