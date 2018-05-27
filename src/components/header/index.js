import React, { Fragment } from 'react';
import Logo from '../logo';
import './style.css';

const Header = () => (
  <Fragment>
    <figure className="logo-wrapper">
      <Logo />
    </figure>
    <h1 className="title">Technologies we learnt</h1>
  </Fragment>
);

export default Header;
