import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import netlifyIdentity from 'netlify-identity-widget';

export default function ColorModeToggleWrapper(props) {
  const handleLogout = () => {
    netlifyIdentity.logout();
    window.location.reload(); // Reload the page after logout
  };

  return (
    <>
      <a style={{ marginRight: 15, cursor: 'pointer', color: '#222222' }} onClick={handleLogout}>
        Logout
      </a>
      <ColorModeToggle {...props} />
    </>
  );
}
