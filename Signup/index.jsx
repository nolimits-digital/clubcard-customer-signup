import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { baseUrl } from '@/baseUrl';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({data}) {
  const classes = useStyles();

  const [data2, setData2] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/customer/customer/${data?.id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({...data2, isConfirmedUser:true})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log({err}))
  }

  return (
    <Container component="main" maxWidth="xs" mt={5}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={`merchant-signup-form ${classes.form}`} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={data?.firstName}
            id="firstName"
            label="First Name"
            name="firstName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={data?.lastName}
            id="lastName"
            label="Last Name"
            name="lastName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={data?.phoneNumber}
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={data?.email}
            label="Email Address"
            name="email"
         
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setData2({...data2, password: e.target.value })}
            name="password"
            label="Password"
            type="password"
            id="password"
       
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setData2({...data2, confirmPassword: e.target.value })}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
       
          />
          <FormControlLabel
            control={<Checkbox value={true}  onChange={(e) => setData2({...data2, isAgree: true })} color="primary" />}
            label="Agree"
          />
           <FormControlLabel
            control={<Checkbox value={true} onChange={(e) => setData2({...data2, isAgreePolicy: true })}  color="primary" />}
            label="Agree"
          />
          <Button

            disabled={data2?.password === data2?.confirmPassword ? false : true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}