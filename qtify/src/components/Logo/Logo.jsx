import React from 'react';
import LogoImage from '../../assests/logo.png';

export default function Logo() {
  return (
    <img
      src={LogoImage}
      alt='logo'
      width={'64px'}
      height={'34px'}
      // style={{ display: 'block', marginLeft: '37' }}
    />
  );
}
