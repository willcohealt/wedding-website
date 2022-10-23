import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import monogram from "../../assets/monogram.png"
import "../../styles/main.css";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={monogram} href="/" />
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/travel' activeStyle>
            Travel
          </NavLink>
          <NavLink to='/accommodations' activeStyle>
            Accommodations
          </NavLink>
          <NavLink to='/rsvp' activeStyle>
            RSVP
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;