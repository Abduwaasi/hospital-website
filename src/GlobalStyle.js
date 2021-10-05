
import Styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 :root{
    --dark-blue:#0e1d60;
    --light-blue:#3e65eb;
    --btn-blue:#4175fe;
    --white:#fff;
    --text-black:#000609;
    --gray-background:#fafafa;
    --dark-footer:#010615;
     --transition:all .3s ease;
     --long-transition:all .6s ease;


 }
 *,::before,::after{
     box-sizing: border-box;
     padding: 0;
     margin: 0;
 }
 body{
    font-family: 'Lato', sans-serif;
     font-size: 1rem;
     color: var(--text-black);
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
 background-color:var(--btn-blue);
 border:none;
 outline:none;
 padding: 1rem 3rem;
 color:var(--white);
 font-size:1.3rem;
 border-radius:0.3rem;
 display: inline-block;
 transition: var(--transition);
 cursor:pointer;

 &:hover{
     color:var(--btn-blue);
     background-color:var(--white)
 }

`
export const IconButton = Styled.button`
outline:none;
  transform: translateY(-50%);
  background: var(--dark-blue);
  color: var(--white);
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border:2px solid var(--white);
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition);
 position:absolute;
 transition:var(--transition);
 :hover{
     background: var(--white);
     color:var(--dark-blue);
 }
`



export default GlobalStyle;
