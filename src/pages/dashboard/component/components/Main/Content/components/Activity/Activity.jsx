//? REACT
import React from 'react';

//? MATERIAL UI
import { Typography } from '@mui/material';

//? CSS
import './activity.css';

const Activity = () => {
  return (
    <>
        <Typography variant='h4'>
            Latest Activity
        </Typography>
        <div className="activities">
            <Typography variant='p'>
                Activity Example
            </Typography>
            <Typography variant='p'>
                Activity Example
            </Typography>
            <Typography variant='p'>
                Activity Example
            </Typography>
            <Typography variant='p'>
                Activity Example
            </Typography>
            <Typography variant='p'>
                Activity Example
            </Typography>
            <Typography variant='p'>
                Activity Example
            </Typography>
        </div>
    </>
  )
};

export default Activity;