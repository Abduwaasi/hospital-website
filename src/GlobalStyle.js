import Styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 :root{
     --dark:#101522;
     --white:#ffffff;
     --primary:#4b59f7;
     --secondary:#0467fb;
     --gray:#a9b3c1;
     --light-blue:#4859f7; 
     --light-text:#f7f8fa;
     --dark-text:#1c2237; 
     --transition:all .3s ease;
     --long-transition:all .6s ease;


 }
 *,::before,::after{
     box-sizing: border-box;
     padding: 0;
     margin: 0;
 }
 body{
     font-family: "Source Sans Pro", sans-serif;
     font-size: 1rem;
 }
 img{
     width:100%;
     height:100%;
     display: block;
 }
 li{
     list-style-type:none;
 }
 a{
     text-decoration:none;
     display:inline-block;
 }
`;
export const Container = Styled.div`
  width: 100%;
  max-width: 1400px;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media Screen and (max-width: 768px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export const Button = Styled.button`
 background-color:var(--primary);
 border:none;
 outline:none;
 padding: 1rem 3rem;
 color:var(--white);
 font-size:1rem;
 box-shadow:2px 2px 3px var(--grey);
 border-radius:0.3rem;
 display: inline-block;
 transition: var(--transition);
 cursor:pointer;

 &:hover{
     color:var(--primary);
     background-color:var(--white)
 }

`


export default GlobalStyle;
