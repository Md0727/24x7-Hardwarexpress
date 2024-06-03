import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Popular_List_Skeleton() {
  return (
    <div className='mt-5' spacing={1} style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'flex-start'
    }}>
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
      <Skeleton variant="circular" width={140} height={200} style={{borderRadius: '10px'}} />
    </div>
  );
}