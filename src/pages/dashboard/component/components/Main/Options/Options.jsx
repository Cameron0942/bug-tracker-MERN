import React from 'react';

import './options.css';
import { Typography } from '@mui/material';

const Options = () => {
  return (
    <>
        <div className='optionsMain'>
            <span className='welcome'>Welcome, User!</span>
            <div className='options'>
                <Typography sx={{marginTop: 15}}>
                    Dashboard
                </Typography>
                <Typography>
                    Manage User Roles
                </Typography>
                <Typography>
                    Manage Projects Users
                </Typography>
                <Typography>
                    My Projects
                </Typography>
                <Typography>
                    My Tickets
                </Typography>
                <Typography>
                    History
                </Typography>
            </div>
            <footer>2023 Bug Tracker <br/> Built by <a href='#'>Cameron0942</a></footer>
        </div>
    </>
  )
};

export default Options;