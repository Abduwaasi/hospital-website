import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyle";

import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:var(--dark);
  color:var(--white);
  height:80px;
  position:sticky;
  top:0;
  left:0;
  z-index:99;

`;

export const NavContainer = styled(Container)`
display: flex;
justify-content:space-between;
align-items:center;
height:80px;
${Container};
 
`;
export const NavLogo = styled(Link)`
display: flex;
align-items:center;
/* justify-self:flex-start; */
color:var(--white);
font-size:2rem;
font-weight:700;

@media screen and (max-width:768px){
  font-size:1.5rem
}

@media screen and (max-width:420px){
  font-size:1rem;
}
 
`;
export const NavIcon = styled(FaMagento)`
 margin-right:1rem;

`;

export const MenuIcon = styled.button`
  display:none;

  @media screen and (max-width:768px){
    display:block;
    background-color:transparent;
    border:transparent;
    outline:none;
    position: absolute;
    top:1.5rem;
    right:2rem;
    transition:var(--transition);

  }
 
`;
export const NavMenu = styled.ul`
   display:flex;
   @media screen  and (max-width:768px){
     width:100%;
     height:90vh;
     background-color:var(--dark);
     position:absolute;
     top:80px;
     left:${({clicked})=>(clicked?0:"-100%")};
     transition:var(--long-transition);
     flex-direction: column;
     padding:2rem 4rem;
   }
   
 
 `;
export const NavItem = styled.li`
  padding-right:3rem;

  @media screen and (max-width:768px){
     padding-bottom:2rem;
  } 
  
`;
export const NavLink = styled(Link)`
text-decoration:none;
color:var(--white);
font-size:1.3rem;
font-weight:500;
text-transform:capitalize; 
transition:var(--transition);

&:hover{
  color:var(--primary);
}
`;

