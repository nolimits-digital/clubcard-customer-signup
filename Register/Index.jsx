import Link from 'next/link';
import React, { useState } from 'react';
import InputWrapper from './InputWrapper';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { baseUrl } from '@/baseUrl'
import { useRouter } from 'next/router';
const SignUp = () => {
  const router = useRouter()
  const [userData, setUserData] = useState({
  })
  const handelInputOnChange = (e) => {
    const newUserData = { ...userData }
    newUserData[e.target.name] = e.target.value
    setUserData(newUserData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, confirmPassword: null })
      }
      const createCustomer = await fetch(`${baseUrl}/customer/create-customer`, options)
      const customerCreateResponse = await createCustomer.json();
      console.log({customerCreateResponse})
      if(customerCreateResponse?.message === 'Item added successfully'){
        router.push('/check-email', {
          query:{
            email: userData?.email
          }
        })
      }
      else{
        router.push('https://my.clubcard.gr')
      }
      debugger
    }
    catch (err) {
      console.log(err.message)
      debugger
    }
  }
  return (
    <div className="signup-body">
      <div className="signup-card">
        <Link href="/" className='logo'>
          <img src="../assets/images/logo/logo.png" alt="logo" />
        </Link>

        <form onSubmit={handleFormSubmit}>
          <InputWrapper InputLabel='First Name' InputType='text' myPlaceholder='Your First Name' inputID='FName' inputName='firstName' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Last Name' InputType='text' myPlaceholder='Your Last Name' inputID='LName' inputName='lastName' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Email' InputType='email' myPlaceholder='Your Email' inputID='Email' inputName='email' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Phone Number' InputType='text' myPlaceholder='Your Phone Number' inputID='phnNo' inputName='phoneNumber' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Password' InputType='password' myPlaceholder='Your Password' inputID='password' inputName='password' onChange={handelInputOnChange} />
          <InputWrapper InputLabel='Re-type Password' InputType='password' myPlaceholder='Re-type Your Password' inputID='password2' inputName='confirmPassword' onChange={handelInputOnChange} />

          <FormControlLabel


            control={<Checkbox name='isAgree' onChange={(e) => {
              const newUserData = { ...userData }
              newUserData[e.target.name] = e.target.checked
              setUserData(newUserData)
            }} />}
            label="I agree to receive updates from clubcard services"
          />

          <FormControlLabel
            control={<Checkbox name='isAgreePolicy' onChange={(e) => {
              const newUserData = { ...userData }
              newUserData[e.target.name] = e.target.checked
              setUserData(newUserData)
            }} />}
            label={
              <>
                I have read and agree to the&nbsp;
                <Link href="/" passHref>
                   Terms of Use.
                </Link>
              </>
            }
          />

          <Button disabled={userData?.firstName && userData?.lastName && userData?.email && userData?.phoneNumber && (userData?.password === userData?.confirmPassword) && userData?.isAgree && userData?.isAgreePolicy ? false : true} variant='contained' className="form-btn" color='primary' type='submit'>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
