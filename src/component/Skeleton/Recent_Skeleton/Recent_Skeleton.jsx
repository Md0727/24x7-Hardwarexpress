import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Recent_Skeleton() {
  return (
    <div spacing={1} style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'flex-start'
    }}>
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
      <Skeleton variant="circular" width={100} height={100} style={{borderRadius: '50px'}} />
    </div>
  );
}