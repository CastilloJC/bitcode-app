import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h1 className='title'>HACKER NEWS</h1>
      <div
        style={{
          width: '100%',
          height: '2px',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }}></div>
    </div>
  );
};

export default Header;
