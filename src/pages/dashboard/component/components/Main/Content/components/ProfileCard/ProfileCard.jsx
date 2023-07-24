//? REACT
import React from 'react';

//? MATERIAL UI
import { Typography } from '@mui/material';

//? CSS
import './profileCard.css';

const ProfileCard = () => {
  return (
    <>
        <Typography variant='h4' sx={{marginBottom: 4}}>
            Your Profile
        </Typography>
        <div className='profileContent'>
            <img src='https://ionicframework.com/docs/icons/logo-react-icon.png' height={150}></img>
            <div className="bio">
                <Typography variant='h5'>
                    First Name Last Name
                </Typography>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mattis urna. Sed libero quam, cursus et ornare in, porttitor sit amet enim. Nam porttitor nisl in enim faucibus, finibus lobortis nibh mattis. Suspendisse potenti. Pellentesque placerat nisl a elit rhoncus pulvinar. Maecenas orci nibh, mattis sed volutpat vitae, mattis placerat quam. In sed metus felis.</span>
            </div>
        </div>
    </>
  )
};

export default ProfileCard;