import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Vendor_Product_Listing_Skeleton() {
    return (
        <div className='px-5'>
            <div>
                <Skeleton variant="circular" width={'100%'} height={50} style={{ borderRadius: '10px' }} />
            </div>
            <div className='mt-5' spacing={1} style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'flex-start'
            }}>
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
                <Skeleton variant="circular" width={140} height={200} style={{ borderRadius: '10px' }} />
            </div>
        </div>
    );
}