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

export default function SignIn({ data }) {
  const classes = useStyles();

  const [data2, setData2] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/customer/customer/${data?.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data2, isConfirmedUser: true })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log({ err }))
  }

  return (
    <div className="signup-body">
      <div className="signup-card">
        <Link href="/" className='logo'>
          <img src="../../assets/images/logo/logo.png" alt="logo" />
        </Link>
        <form onSubmit={handleSubmit} className={`merchant-signup-form ${classes.form}`} noValidate>
          <div className="input-wrapper">
            <label>First Name</label>
            <input type="text"
              value={data?.firstName}
              name="firstName"
              id="firstName"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Last Name</label>
            <input type="text"
              value={data?.lastName}
              name="lastName"
              id="lastName"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Phone Number</label>
            <input type="text"
              value={data?.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Email Address</label>
            <input type="email"
              value={data?.email}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="passsword"
              onChange={(e) => setData2({ ...data2, password: e.target.value })}
              name="password"
              id="password"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Confirm Password</label>
            <input type="passsword"
              onChange={(e) => setData2({ ...data2, confirmPassword: e.target.value })}
              name="confirmPassword"
              id="confirmPassword"
              required
            />
          </div>
          <FormControlLabel
            control={<Checkbox value={true} onChange={(e) => setData2({ ...data2, isAgree: true })} />}
            label="I agree to receive updates from clubcard services"
          />
          <FormControlLabel
            control={<Checkbox value={true} onChange={(e) => setData2({ ...data2, isAgreePolicy: true })} />}
            label={
              <>
                I have read and agree to the&nbsp;
                <Link href="/" passHref>
                  Terms of Use.
                </Link>
              </>
            }
          />
          <Button

            disabled={data2?.password === data2?.confirmPassword ? false : true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`form-btn ${classes.submit}`}
          >
            Sign Up
          </Button>

        </form>
      </div>
    </div>
    // <Container component="main" maxWidth="xs" mt={5}>
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <form></form>
    //   </div>
    //   {/* <Box mt={8}>
    //     <Copyright />
    //   </Box> */}
    // </Container>
  );
}