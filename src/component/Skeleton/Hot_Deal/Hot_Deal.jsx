import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Hot_Deal() {
  return (
    <div spacing={1} style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'flex-start'
    }}>
      <Skeleton variant="circular" width={'50%'} height={150} style={{borderRadius: '5px'}} />
      <Skeleton variant="circular" width={'50%'} height={150} style={{borderRadius: '5px'}} />
    </div>
  );
}