import React, { useState } from "react";
import AMF from "../../Images/amf_logo-min.png"

import {
  Nav,
  NavContainer,
  NavLogo,
  Logo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink
} from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({clicked}) => {
   const [click, setClick] = useState(false);
   const handleClick= ()=>{
     setClick(!click)
   }
   const closeMenu=()=>{
     setClick(false)
   }


  return (
     <IconContext.Provider value={{style:{fontSize:"2rem",color:"var(--white)"}}}>
       <Nav>
       <NavContainer>
         <NavLogo to="/" onClick={closeMenu}>
           <Logo src={AMF} alt="amf logo"/>
           Health <br/>Services
         </NavLogo>
         <MenuIcon onClick={handleClick}>
           {click?<FaTimes/>:<FaBars/>}
         </MenuIcon>
         <NavMenu onClick={handleClick} clicked={click}>
           <NavItem >
             <NavLink to="/">Home</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/about">About Us</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/service">Services</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/contact">Contact Us</NavLink>
           </NavItem>
         </NavMenu>
       </NavContainer>
      </Nav>
    
     </IconContext.Provider>
      
  );
};
export default Navbar;
