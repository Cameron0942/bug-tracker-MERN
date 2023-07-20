//? REACT
import React, { useState } from 'react';

//? MATERIAL UI
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

//? FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

//? ICONS
import bugIcon from '../../assets/icons8-bug-60.png';

//? CUSTOM FUNCTIONS
import emailValidator from '../../validators/validateEmail';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(true);

  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeClosed = <FontAwesomeIcon icon={faEyeSlash} />;

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e, field) => {
    switch (field) {
      case 'email':
        setEmailError(false);
        setEmailHelperText('');
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValidator(email)) {
      setEmailError(true);
      setEmailHelperText('Please enter a valid email');
      return;
    }
  };

  return (
    <>
      <div className='signup-div'>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '25%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#e7ebf0',
            p: 3,
            borderRadius: '3px',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontSize: 45,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={bugIcon} alt='Bug Icon' width={60} height={60} /> Bug Tracker
          </Typography>
          <Divider />

          <Typography variant='h2' sx={{ fontSize: 35, textAlign: 'center', marginTop: 2 }}>
            Welcome Back
          </Typography>

          <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left' }}>
              Email
            </Typography>
            <TextField
              required
              variant='outlined'
              size='small'
              error={emailError}
              helperText={emailHelperText}
              onChange={(event) => handleChange(event, 'email')}
              sx={{ width: '100%', backgroundColor: '#dadee3' }}
              />
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left' }}>
              Password
            </Typography>
            <TextField
              required
              variant='outlined'
              size='small'
              type={passwordShown ? 'text' : 'password'}
              onChange={(event) => handleChange(event, 'password')}
              sx={{ width: '100%', backgroundColor: '#dadee3' }}
              InputProps={{
                endAdornment: (
                  <i onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {passwordShown ? eye : eyeClosed}
                  </i>
                )
              }}
              />
            <Button
              variant='contained'
              size='large'
              type='submit'
              sx={{ marginTop: 2, width: '100%' }}
            >
              Sign In
            </Button>
          </Box>
          <Typography sx={{ marginTop: 1 }}>
            Need an account?{' '}
            <a href='/' style={{ color: '#0091E2', textDecoration: 'none', fontWeight: 600 }}>
              Sign Up
            </a>
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Sign in as{' '}
            <a href='/' style={{ color: '#0091E2', fontWeight: 600 }}>
              Demo User
            </a>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Login;
