import Link from 'next/link';
import React from 'react';

const CheckEmail = () => {
  return (
    <div className="check-email-body">
      <div className="check-email-card">
        <div className="check-email-logo">
          <Link href="/" className='logo'>
            <img src="../assets/images/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <h2>Check Your Email</h2>
        <p className="check-email-message">
          We have sent a confirmation email to <strong>your email address</strong>.
          Please check your inbox and click on the verification link to complete the signup process.
        </p>

        {/* <div className="email-actions">
          <button className="resend-email-btn">Resend Email</button>
        </div> */}

        <div className="back-to-home">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;