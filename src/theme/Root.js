import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import '../css/login.css';
import Loading from './Loading';

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Handle user state change
    const user = netlifyIdentity.currentUser();
    if (user) {
      setUserAuth(user);
    }

    setAuthLoading(false);

    // Add event listener for login and logout
    netlifyIdentity.on('login', (user) => {
      setUserAuth(user);
      netlifyIdentity.close(); // Close the modal after login
    });

    netlifyIdentity.on('logout', () => {
      setUserAuth(null);
    });

    return () => {
      // Clean up event listeners on unmount
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  // Check if the user is authenticated
  const isAllow = () => {
    return userAuth?.email;
  };

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{ display: 'none' }}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (
        <div className="login">
          <div className="login__container">
            <button
              className="login__btn login__google"
              onClick={() => netlifyIdentity.open()}
            >
              Login with Netlify
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
