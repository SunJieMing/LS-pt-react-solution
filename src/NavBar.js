import React from 'react';
import { NavBarIcon, NavBarLeft, NavBarRight } from './navbar/';

export default (props) => {
  return (
    <div className="navbar">
      <NavBarLeft />
      <NavBarIcon />
      <NavBarRight />
    </div>
  );
};
