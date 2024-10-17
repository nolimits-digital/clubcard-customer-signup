import Link from 'next/link';
import React from 'react';

const ConfirmEmail = () => {
  return (
    <div className="confirm-email-body">
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
          <Link href="/login" className="login-btn">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
