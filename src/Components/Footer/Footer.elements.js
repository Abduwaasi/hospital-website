import Styled from "styled-components"
import {Link} from "react-router-dom"
import {FaMagento} from "react-icons/fa"
import { Container } from "../../GlobalStyle"

export const FooterContainer = Styled.section`
background-color:var(--dark-footer);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const FooterSubcription = Styled(Container)`
 display: flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 text-align:center;
 margin-bottom:24px;
 padding:24px;
 color:var(--white);
 ${Container};
`
export const FooterSubHeading = Styled.p`
font-family:Arial sans-serif;
margin-bottom:24px;
font-size:24px;
`

export const FooterSubText= Styled.p`
margin-bottom:24px;
font-size:24px;
`
export const Form =Styled.form`
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:820px){
    flex-direction:column;
    width:80%;
}
`

export const FormInput = Styled.input`
 padding:10px 20px;
 border:none;
 outline:none;
 border-radius:2px;
 border:1px solid var(--white);
 margin-right:10px;
 font-size:1rem;

 @media screen and (max-width:820px){
     width:100%;
     margin-bottom:20px;
 }
 
 &::placeholder{
   color: var(--dark-blue);
 }
`
export const FooterLinksContainer = Styled.div`
width:100%;
max-width:1000px;
display:flex;
justify-content:center;

@media screen and (max-width:820px){
    padding-top:32px;
}
`

export const FooterLinksWrapper = Styled.div`
 display:flex;
 margin-right:3rem;

 @media screen and (max-width:820px){
     flex-direction:column;
     margin-right:0;
 }
`
export const FooterLinksItems = Styled.div`
 display:flex;
 flex-grow:1;
 flex-direction:column;
 align-items:flex-start;
 margin:1rem;
 text-align:left;
 width:10rem;
 box-sizing:border-box;
 color:var(--white);

 @media screen and (max-width:420px){
     margin:0;
     padding:10px;
     width:100%;
 }
`
export const FooterLinkTitle = Styled.h2`
margin-bottom:16px;
`

export const FooterLink = Styled(Link)`
 color: var(--white);
 text-decoration:none;
 margin-bottom:0.5rem;

 &:hover{
     transition:var(--transition);
     color:#0467fb;
 }
`
export const SocialMedia = Styled.section`
 max-width:1000px;
 width:100%;
`
export const SocialMediaWrap = Styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:90%;
 max-width:1000px;
 margin:40px auto 0 auto;

 @media screen and (max-width:820px){
     flex-direction:column;
 }
`

export const SocialLogo = Styled(Link)`
 color: var(--white);
 justify-self:start;
 cursor:pointer;
 display:flex;
 align-items:center;
 margin-bottom:1rem;
 font-size:2rem;
`
export const OfficialLogo = Styled.img`
 margin-right:10px;
 width:50px;
 height:50px;
`
export const WebsiteRight = Styled.small`
color:var(--white);
margin-bottom:1rem;
`
export const SocialIcons = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;

`
export const SocialIconLink= Styled.a`
 color:var(--white);
 font-size:24px;
`

export const IconWrapper = Styled.div`
display:flex;
justify-content:center;

div{
    margin-left:1rem;
}
`