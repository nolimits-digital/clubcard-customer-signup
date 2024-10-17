import Link from 'next/link';
import React, { useState } from 'react';
import InputWrapper from './InputWrapper';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const SignUp = () => {
  
  const [userData, setUserData] = useState({})
  const handelInputOnChange = (e) => {
    const newUserData = {...userData}
    newUserData[e.target.name] = e.target.value
    setUserData(newUserData)
  }
  console.log({userData})

  return (
    <div className="signup-body">
      <div className="signup-card">
        <Link href="/" className='logo'>
          <img src="../assets/images/logo/logo.png" alt="logo" />
        </Link>

        <form action="/">
          <InputWrapper InputLabel='First Name' InputType='text' myPlaceholder='Your First Name' inputID='FName' inputName='firstName' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Last Name' InputType='text' myPlaceholder='Your Last Name' inputID='LName' inputName='lastName' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Email' InputType='email' myPlaceholder='Your Email' inputID='Email' inputName='email' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Phone Number' InputType='text' myPlaceholder='Your Phone Number' inputID='phnNo' inputName='phoneNumber' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Password' InputType='password' myPlaceholder='Your Password' inputID='password' inputName='password' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Re-type Password' InputType='password' myPlaceholder='Re-type Your Password' inputID='password2' inputName='confirmPassword' onChange={handelInputOnChange} />
          
          <FormControlLabel 
            control={<Checkbox />} 
            label="I agree to receive updates from clubcard services"
          />
          
          <FormControlLabel 
            control={<Checkbox />} 
            label={
              <>
                I have read and agree to the
                <Link href="/" passHref>
                    Terms of Use.
                </Link>
              </>
            } 
          />

          <button className="form-btn" type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
