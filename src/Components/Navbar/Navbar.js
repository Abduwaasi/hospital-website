import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
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
    <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
      <Nav>
       <NavContainer>
         <NavLogo to="/" onClick={closeMenu}>
           <NavIcon/>
           Medical
         </NavLogo>
         <MenuIcon onClick={handleClick}>
           {click?<FaTimes/>:<FaBars/>}
         </MenuIcon>
         <NavMenu onClick={handleClick} clicked={click}>
           <NavItem >
             <NavLink to="/">Home</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/">About Us</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/">Services</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/">Contact Us</NavLink>
           </NavItem>
         </NavMenu>
       </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};
export default Navbar;
