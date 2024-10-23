import React from 'react';
import LogoImage from '../../assests/logo.png';

export default function Logo() {
  return (
    <img
      src={LogoImage}
      alt='logo'
      width={67}
      height={34}
      style={{ position: 'relative', left: '32px' }}
    />
  );
}
