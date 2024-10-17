import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '@/baseUrl';
const ConfirmEmail = () => {

  const router = useRouter();
  const {id} = router.query;
  const [confirmed, setConfirmed] = useState(false)


  useEffect(() => {
    fetch(`${baseUrl}/customer/customer/${id}`)
    .then((response) =>response.json())
    .then(data => {
      console.log(data?.Item)

      if(data?.Item?.email){
        fetch(`${baseUrl}/customer/customerStatus/${id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email:data?.Item?.email,
            isConfirmedUser:true,
            status: "active"
          })
        })
        .then(res => res.json())
        .then(dataSet => {
          if(dataSet?.message === "Item updated successfully"){
            setConfirmed(true)
          }
        })
        .catch(err => console.log(err.message))
      }

      debugger
    })
    .catch((error) => {
      console.log(error.message)
      debugger
    });
  },[id])


  return (
    <>
      {confirmed ? <div className="confirm-email-body">
      <div className="confirm-email-card">
        <div className="confirm-email-logo">
          <Link href="/" className='logo'>
            <img src="../assets/images/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <h2>Email Confirmed</h2>
        <p className="confirm-email-message">
          Your email has been successfully confirmed. You can now proceed to log in and enjoy our services.
        </p>

        <div className="email-actions">
          <Link href="https://my.clubcard.gr" className="login-btn">
            Go to Login
          </Link>
        </div>
      </div>
    </div> : 
    <div className="confirm-email-body">
      <div className="confirm-email-card">
        <div className="confirm-email-logo">
          <Link href="/" className='logo'>
            <img src="../assets/images/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <h2>Please Wait</h2>
        <p className="confirm-email-message">
          We Are verifying your identity
        </p>

        
      </div>
    </div>
    }
    </>
  );
};

export default ConfirmEmail;
