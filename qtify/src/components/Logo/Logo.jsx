import React from 'react';
import LogoImage from '../../assests/logo.png';

export default function Logo() {
  return (
    <img
      src={LogoImage}
      alt='logo'
      // style={{ display: 'block', marginLeft: '37' }}
    />
  );
}
